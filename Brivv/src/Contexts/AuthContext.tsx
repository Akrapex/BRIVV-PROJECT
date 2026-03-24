import {
  createContext,
  useContext,
  useEffect,
  useState,
  type SetStateAction,
} from "react";
import supabase from "../../utils/supabaseClient";
import type { Session, User } from "@supabase/supabase-js";
import { useLocation } from "react-router";

interface AuthResponse {
  success: boolean;
  message: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  setSession: React.Dispatch<SetStateAction<Session | null>>;
  sessionLoader: boolean;
  loading: boolean;
  signUpUser: (
    fullName: string,
    email: string,
    password: string,
  ) => Promise<AuthResponse>;
  signInUser: (email: string, password: string) => Promise<any>;
  signOutUser: () => Promise<AuthResponse>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [sessionLoader, setSessionLoader] = useState(true);

  if (!supabase) {
    throw new Error("Supabase client is not initialized");
  }

  const location = window.location.href;
  const developmentUrl = location?.split("/")[2];

  const redirectUrl =
    import.meta.env.MODE === "development"
      ? `http://${developmentUrl}/auth/callback`
      : "https://brivv.akrapex.com/auth/callback";

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setSessionLoader(false);
    };
    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setSessionLoader(false);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signUpUser = async (
    fullName: string,
    email: string,
    password: string,
  ) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
          emailRedirectTo: redirectUrl,
        },
      });

      if (error) {
        setLoading(false);
        return { success: false, message: error.message };
      }

      if (data.user) {
        setLoading(false);
        return {
          success: true,
          message:
            "Signup request processed! We've sent a confirmation link to your inbox. Please click the link to verify your account and start exploring properties.",
        };
      }

      return {
        success: true,
        message: "Signup request processed! ",
      };
    } catch (error) {
      return {
        success: false,
        message: "An unexpected error occurred. Please try again.",
      };
    }
  };

  const signInUser = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setLoading(false);
        return {
          success: false,
          message: error.message,
        };
      }
      setLoading(false);
      return {
        success: true,
        message: "Signed in successfully!",
      };
    } catch (error) {
      console.log("An error occured while signing in.");
    }
  };

  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error.message);
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: true,
      message: "Signed out successfully!",
    };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        setSession,
        loading,
        signUpUser,
        signInUser,
        signOutUser,
        sessionLoader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

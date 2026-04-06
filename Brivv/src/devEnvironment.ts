const location = window.location.href;
const developmentUrl = location?.split("/")[2];

export const redirectUrl: string =
  import.meta.env.MODE === "development"
    ? `http://${developmentUrl}/auth/callback`
    : "https://brivv.akrapex.com/auth/callback";

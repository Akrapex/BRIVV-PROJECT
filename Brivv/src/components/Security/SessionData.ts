interface sessionType {
  device: string;
  type: string;
  loc: string;
  ip: string;
  time: string;
  current: boolean;
}

export const sessionData: sessionType[] = [
  {
    device: "Windows PC • Chrome",
    type: "THIS DEVICE",
    loc: "San Francisco, CA",
    ip: "192.168.1.45",
    time: "Active Now",
    current: true,
  },
  {
    device: "iPhone 14 Pro • App",
    type: "MOBILE",
    loc: "Los Angeles, CA",
    ip: "172.58.12.9",
    time: "Oct 24, 2:15 PM",
    current: false,
  },
  {
    device: "MacBook Air • Safari",
    type: "LAPTOP",
    loc: "New York, NY",
    ip: "104.16.24.111",
    time: "Oct 20, 09:44 AM",
    current: false,
  },
];

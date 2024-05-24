import { Theme } from "./constants/Colors";

declare module "@react-navigation/native" {
  export function useTheme(): Theme;
}

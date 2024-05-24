import { Alert, Share } from "react-native";

interface ShareProps {
  title: string;
  message: string;
}

export const onShare = async ({ title, message }: ShareProps) => {
  try {
    const result = await Share.share({
      title: title ?? "Collectors",
      url: title ?? "Collectors",
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error: any) {
    Alert.alert(error.message);
  }
};

import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useStyles } from "react-native-unistyles";

export default function Chart({ range }: any) {
  const { theme } = useStyles();

  let labels;
  let data;
  switch (range) {
    case "2W":
      labels = ["10/22", "10/29"];
      data = [112, 78, 64, 51, 62];
      break;
    case "1M":
      labels = ["10/1", "10/8", "10/15", "10/22", "10/29"];
      data = [91, 116, 108, 112, 78, 64, 51, 62];
      break;
    case "3M":
      labels = ["AUG", "SEP", "OCT"];
      data = [112, 88, 94, 90, 91, 116, 108, 112, 78, 64, 51, 62];
      break;
    case "6M":
      labels = ["MAY", "JUN", "JUL", "AUG", "SEP", "OCT"];
      data = [
        22, 27, 21, 23, 31, 80, 120, 114, 134, 108, 112, 88, 94, 90, 91, 116,
        108, 112, 78, 64, 51, 62,
      ];
      break;
    case "1Y":
      labels = ["OCT '23", "APR", "OCT"];
      data = [
        22, 27, 21, 23, 31, 80, 120, 114, 134, 108, 112, 88, 94, 90, 91, 116,
        108, 112, 78, 64, 51, 62, 80, 120, 114, 134, 108, 112, 88, 94, 90, 91,
        116, 108, 112, 78, 64, 51, 62,
      ];
      break;
    case "ALL":
      labels = ["2022", "2023", "2024"];
      data = [
        51, 62, 80, 120, 114, 134, 108, 112, 88, 94, 90, 91, 116, 108, 112, 78,
        64, 51, 62, 22, 27, 21, 23, 31, 120, 114, 134, 108, 112, 88, 94, 90, 91,
        116, 108, 112, 120, 114, 134, 108, 112, 78, 64, 51, 62,
      ];
      break;
  }

  return (
    <LineChart
      data={{
        labels: labels!,
        datasets: [
          {
            data: data!,
            strokeWidth: 4,
            color: (opacity = 1) => theme.colors.textPrimary,
          },
        ],
      }}
      withDots={false}
      withShadow={false}
      withVerticalLines={false}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      yAxisLabel="$"
      chartConfig={{
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => theme.colors.borderSecondary,
        labelColor: (opacity = 1) => theme.colors.textDisabled,
        propsForBackgroundLines: {
          strokeDasharray: "", // solid background lines with no dashes
        },
      }}
      style={{ marginLeft: -8, marginBottom: 8 }}
      bezier
    />
  );
}

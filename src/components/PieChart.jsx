import React, { useState } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import { Tooltip as MuiTooltip, Box, Typography, Button } from "@mui/material";

const logs = [
  {
    _id: "679e29571750be8ecc5a70a8",
    level: "user_action",
    log_level: "info",
    logger: "hello",
    module: "sample",
    function: "get_sample_response",
    line: 20,
    message: "get request",
    timestamp: "2024-12-03T10:47:19.897440+00:00",
    thread_name: "MainThread",
    name: "hello",
    msg: "get request",
    args: [],
    levelname: "user_action",
    levelno: 25,
    pathname: "/app/services/sample.py",
    filename: "sample.py",
    exc_info: null,
    exc_text: null,
    stack_info: null,
    lineno: 20,
    funcName: "get_sample_response",
    created: 1733222839.8974404,
    msecs: 897,
    relativeCreated: 20328.948974609375,
    thread: 140002462550912,
    threadName: "MainThread",
    processName: "SpawnProcess-1",
    process: 10,
    username: "pargar",
    state: "active",
    create_timestamp: "1733222955",
  },
  {
    _id: "679e299e1750be8ecc5a70aa",
    level: "user_action",
    log_level: "info",
    logger: "hello",
    module: "sample",
    function: "get_sample_response",
    line: 20,
    message: "login failed",
    timestamp: "2024-12-03T10:47:19.897440+00:00",
    thread_name: "MainThread",
    name: "hello",
    msg: "get request",
    args: [],
    levelname: "user_action",
    levelno: 25,
    pathname: "/app/services/sample.py",
    filename: "sample.py",
    exc_info: null,
    exc_text: null,
    stack_info: null,
    lineno: 20,
    funcName: "get_sample_response",
    created: 1733222839.8974404,
    msecs: 897,
    relativeCreated: 20328.948974609375,
    thread: 140002462550912,
    threadName: "MainThread",
    processName: "SpawnProcess-1",
    process: 10,
    username: "pargar",
    state: "active",
    create_timestamp: "1733222955",
  },
  {
    _id: "680a2f25f10095eb582196e9",
    level: "info",
    logger: "gateway",
    module: "sensors",
    function: "confirm_file",
    line: 117,
    message: "registered sensor with id of  103865048 successfully",
    timestamp: "2025-04-24T12:31:33.397080+00:00",
    thread_name: "MainThread",
    name: "gateway",
    msg: "registered sensor with id of  103865048 successfully",
    args: [],
    levelname: "user_action",
    levelno: 25,
    pathname: "/app/api/v1/sensors.py",
    filename: "sensors.py",
    exc_info: null,
    exc_text: null,
    stack_info: null,
    lineno: 117,
    funcName: "confirm_file",
    created: 1745497893.3970802,
    msecs: 397,
    relativeCreated: 83840988.35349083,
    thread: 139942111382400,
    threadName: "MainThread",
    processName: "SpawnProcess-1",
    process: 8,
    username: "pargar",
    state: "active",
    create_timestamp: "1745497893",
  },
  {
    _id: "67f14cfddaa7f208a039aab1",
    level: "info",
    logger: "gateway",
    module: "sensors",
    function: "pin_sensor",
    line: 29,
    message: "updated the sensor 735892304 information",
    timestamp: "2025-04-05T15:32:13.879230+00:00",
    thread_name: "MainThread",
    name: "gateway",
    msg: "updated the sensor 735892304 information",
    args: [],
    levelname: "user_action",
    levelno: 25,
    pathname: "/app/api/v1/sensors.py",
    filename: "sensors.py",
    exc_info: null,
    exc_text: null,
    stack_info: null,
    lineno: 29,
    funcName: "pin_sensor",
    created: 1743867133.8792303,
    msecs: 879,
    relativeCreated: 38810966.57371521,
    thread: 139913268841344,
    threadName: "MainThread",
    processName: "SpawnProcess-1",
    process: 7,
    username: "pargar",
    state: "active",
    create_timestamp: "1743867133",
  },
  {
    _id: "67d11772561a0c7867e07aeb",
    level: "info",
    logger: "gateway",
    module: "sensors",
    function: "confirm_file",
    line: 111,
    message: "registered sensor with id of  103865048 successfully",
    timestamp: "2025-03-12T05:11:14.024460+00:00",
    thread_name: "MainThread",
    name: "gateway",
    msg: "registered sensor with id of  103865048 successfully",
    args: [],
    levelname: "user_action",
    levelno: 25,
    pathname: "/app/api/v1/sensors.py",
    filename: "sensors.py",
    exc_info: null,
    exc_text: null,
    stack_info: null,
    lineno: 111,
    funcName: "confirm_file",
    created: 1741756274.0244603,
    msecs: 24,
    relativeCreated: 45538010.70809364,
    thread: 139943312583552,
    threadName: "MainThread",
    processName: "SpawnProcess-1",
    process: 8,
    username: "pargar",
    state: "active",
    create_timestamp: "1741756274",
  },
  {
    _id: "67d11739561a0c7867e07aea",
    level: "info",
    logger: "gateway",
    module: "sensors",
    function: "confirm_file",
    line: 111,
    message: "registered sensor with id of  103865048 successfully",
    timestamp: "2025-03-12T05:10:17.596368+00:00",
    thread_name: "MainThread",
    name: "gateway",
    msg: "registered sensor with id of  103865048 successfully",
    args: [],
    levelname: "user_action",
    levelno: 25,
    pathname: "/app/api/v1/sensors.py",
    filename: "sensors.py",
    exc_info: null,
    exc_text: null,
    stack_info: null,
    lineno: 111,
    funcName: "confirm_file",
    created: 1741756217.5963678,
    msecs: 596,
    relativeCreated: 45481582.61561394,
    thread: 139943312583552,
    threadName: "MainThread",
    processName: "SpawnProcess-1",
    process: 8,
    username: "pargar",
    state: "active",
    create_timestamp: "1741756217",
  },
  {
    _id: "67d116f0561a0c7867e07ae8",
    level: "info",
    logger: "gateway",
    module: "sensors",
    function: "confirm_file",
    line: 111,
    message: "registered sensor with id of  103865048 successfully",
    timestamp: "2025-03-12T05:09:04.799734+00:00",
    thread_name: "MainThread",
    name: "gateway",
    msg: "registered sensor with id of  103865048 successfully",
    args: [],
    levelname: "user_action",
    levelno: 25,
    pathname: "/app/api/v1/sensors.py",
    filename: "sensors.py",
    exc_info: null,
    exc_text: null,
    stack_info: null,
    lineno: 111,
    funcName: "confirm_file",
    created: 1741756144.7997339,
    msecs: 799,
    relativeCreated: 45408785.98165512,
    thread: 139943312583552,
    threadName: "MainThread",
    processName: "SpawnProcess-1",
    process: 8,
    username: "pargar",
    state: "active",
    create_timestamp: "1741756144",
  },
  {
    _id: "67d018cd561a0c7867e07ad0",
    level: "info",
    logger: "gateway",
    module: "sensors",
    function: "pin_sensor",
    line: 21,
    message: "updated the sensor 1302259055 information",
    timestamp: "2025-03-11T11:04:45.919360+00:00",
    thread_name: "MainThread",
    name: "gateway",
    msg: "updated the sensor 1302259055 information",
    args: [],
    levelname: "user_action",
    levelno: 25,
    pathname: "/app/api/v1/sensors.py",
    filename: "sensors.py",
    exc_info: null,
    exc_text: null,
    stack_info: null,
    lineno: 21,
    funcName: "pin_sensor",
    created: 1741691085.9193604,
    msecs: 919,
    relativeCreated: 258426379.77480888,
    thread: 139924801698688,
    threadName: "MainThread",
    processName: "SpawnProcess-1",
    process: 8,
    username: "pargar",
    state: "active",
    create_timestamp: "1741691085",
  },
  {
    _id: "67cfe543561a0c7867e07aab",
    level: "info",
    logger: "gateway",
    module: "sensors",
    function: "pin_sensor",
    line: 21,
    message: "updated the sensor 38217928 information",
    timestamp: "2025-03-11T07:24:51.882179+00:00",
    thread_name: "MainThread",
    name: "gateway",
    msg: "updated the sensor 38217928 information",
    args: [],
    levelname: "user_action",
    levelno: 25,
    pathname: "/app/api/v1/sensors.py",
    filename: "sensors.py",
    exc_info: null,
    exc_text: null,
    stack_info: null,
    lineno: 21,
    funcName: "pin_sensor",
    created: 1741677891.8821788,
    msecs: 882,
    relativeCreated: 245232342.59319305,
    thread: 139924801698688,
    threadName: "MainThread",
    processName: "SpawnProcess-1",
    process: 8,
    username: "pargar",
    state: "active",
    create_timestamp: "1741677891",
  },
  {
    _id: "67cfe542561a0c7867e07aaa",
    level: "info",
    logger: "gateway",
    module: "sensors",
    function: "pin_sensor",
    line: 21,
    message: "updated the sensor 38217928 information",
    timestamp: "2025-03-11T07:24:50.111429+00:00",
    thread_name: "MainThread",
    name: "gateway",
    msg: "updated the sensor 38217928 information",
    args: [],
    levelname: "user_action",
    levelno: 25,
    pathname: "/app/api/v1/sensors.py",
    filename: "sensors.py",
    exc_info: null,
    exc_text: null,
    stack_info: null,
    lineno: 21,
    funcName: "pin_sensor",
    created: 1741677890.1114292,
    msecs: 111,
    relativeCreated: 245230571.84362411,
    thread: 139924801698688,
    threadName: "MainThread",
    processName: "SpawnProcess-1",
    process: 8,
    username: "pargar",
    state: "active",
    create_timestamp: "1741677890",
  },
  {
    _id: "67ce7c543987cac9aeefc81c",
    level: "info",
    logger: "gateway",
    module: "sensors",
    function: "confirm_file",
    line: 99,
    message: "registered sensor with id of  103865047 successfully",
    timestamp: "2025-03-10T05:44:52.413119+00:00",
    thread_name: "MainThread",
    name: "gateway",
    msg: "registered sensor with id of  103865047 successfully",
    args: [],
    levelname: "user_action",
    levelno: 25,
    pathname: "/app/api/v1/sensors.py",
    filename: "sensors.py",
    exc_info: null,
    exc_text: null,
    stack_info: null,
    lineno: 99,
    funcName: "confirm_file",
    created: 1741585492.413119,
    msecs: 413,
    relativeCreated: 152832873.53348732,
    thread: 139924801698688,
    threadName: "MainThread",
    processName: "SpawnProcess-1",
    process: 8,
    username: "pargar",
    state: "active",
    create_timestamp: "1741585492",
  },
];

const logLevelCounter = (logs) => {
  return logs.reduce((acc, log) => {
    const level = log.level;

    console.log("-------------------------------");
    // console.log("The acc is: ", acc);
    // console.log("The log level is: ", log.level);
    // console.log("The acc[level] is: ", acc[level]);

    if (acc[level]) {
      acc[level] += 1;
    } else {
      acc[level] = 1;
    }
    return acc;
  }, {});
};

// CUSTOM LEGEND

const CustomPieChartLegend = ({ payload, hoverIn, hoverOut }) => {
  // console.log("🚀 ~ CustomPieChartLegend ~ payload:", payload);

  return (
    <Box
      sx={{
        position: "absolute",
        top: -180,
        right: -120,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {payload.map((entry, index) => (
        <MuiTooltip
          key={index}
          title={entry.value}
          arrow
          placement={entry.value === "user_action" ? "top-start" : "bottom"}
        >
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onMouseEnter={() => hoverIn(entry.value)}
            onMouseLeave={hoverOut}
          >
            <Box width={12} height={12} bgcolor={entry.color || "red"} />
            <Typography variant="body2">{entry.value}</Typography>
          </Box>
        </MuiTooltip>
      ))}
    </Box>
  );
};

// CUSTOM TOOLTIP

const CustomPieChartTooltip = ({ active, payload }) => {
  // console.log("🚀 ~ CustomPieChartTooltip ~ clickedValue:", clickedValue);

  if (active && payload) {
    const data = payload[0];

    console.log(
      "==============================================================================="
    );
    console.log("🚀 ~ CustomTooltip ~ data:", data);

    return (
      <Box
        sx={{
          backgroundColor: `white`,
          padding: 1,
          borderRadius: 1,
          color: `${data.payload.fill}`,
        }}
      >
        <Typography variant="body2">
          <strong>{data.name}</strong>: {data.value}
        </Typography>
      </Box>
    );
  }
};

// CUSTOM PIE COMPONENT

const CustomPieChart = ({ logs }) => {
  console.log("logs: ", logs);

  const logLevelCounts = logLevelCounter(logs);

  // console.log("logLevelCounter key log: ", Object.keys(logLevelCounts));
  // console.log("logLevelCounter entries log: ", Object.entries(logLevelCounts));

  const data = Object.keys(logLevelCounts).map((key) => ({
    name: key,
    value: logLevelCounts[key],
  }));

  console.log("🚀 ~ data ~ data:", data);

  const COLORS = ["#ff9999", "#66b3ff"];

  const [hoveredLegend, setHoveredLegend] = useState(null);

  return (
    <PieChart width={350} height={350}>
      <Pie data={data} dataKey="value" nameKey="name" outerRadius={150} label>
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            stroke={hoveredLegend === entry.name ? "white" : "none"}
            strokeWidth={hoveredLegend == entry.name ? 2 : 0}
          />
        ))}
      </Pie>
      <Tooltip content={<CustomPieChartTooltip />} />
      <Legend
        content={
          <CustomPieChartLegend
            hoverIn={(value) => setHoveredLegend(value)}
            hoverOut={() => setHoveredLegend(null)}
          />
        }
      />
    </PieChart>
  );
};

const LogsTablePieChart = () => {
  // const { logs = [] } = useUserLogs();

  return <CustomPieChart logs={logs} />;
};

export default LogsTablePieChart;

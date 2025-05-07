import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";
import { Box, Typography, Paper } from "@mui/material";
import { useState } from "react";

const data = [
  { year: 2010, count: 754, color: "#1976d2" },
  { year: 2011, count: 214, color: "#d32f2f" },
  { year: 2012, count: 125, color: "#388e3c" },
  { year: 2013, count: 859, color: "#fbc02d" },
  { year: 2014, count: 381, color: "#7b1fa2" },
  { year: 2015, count: 350, color: "#00838f" },
  { year: 2016, count: 328, color: "#f57c00" },
  { year: 2017, count: 242, color: "#5d4037" },
  { year: 2018, count: 854, color: "#0288d1" },
  { year: 2019, count: 204, color: "#c2185b" },
  { year: 2020, count: 792, color: "#689f38" },
  { year: 2021, count: 858, color: "#512da8" },
  { year: 2022, count: 658, color: "#00796b" },
  { year: 2023, count: 189, color: "#ffa000" },
  { year: 2024, count: 704, color: "#455a64" },
];

const CustomMuiTooltip = ({ tooltipData }) => {
  if (!tooltipData) return null;

  const { x, y, label, count } = tooltipData;

  return (
    <Paper
      sx={{
        position: "fixed",
        top: y + 20,
        left: x + 30,
        bgcolor: "background.paper",
        borderRadius: 1,
        padding: 1,
        zIndex: 10,
        minWidth: 120,
      }}
    >
      <Typography variant="body2" fontWeight="bold">
        {label}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Value: {count}
      </Typography>
    </Paper>
  );
};

const CustomLegend = ({ data, hoverIn, hoverOut }) => {
  const [tooltip, setTooltip] = useState(null);

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      {data.map((entry, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            hoverIn(entry.year);
            setTooltip({
              x: e.clientX,
              y: e.clientY,
              label: `${entry.year}`,
              count: `${entry.count}`,
            });
          }}
          onMouseLeave={() => {
            hoverOut();
            setTooltip(null);
          }}
        >
          <Box width={12} height={12} bgcolor={entry.color || "blue"} />
          <Typography variant="body2">{entry.year}</Typography>
          <CustomMuiTooltip tooltipData={tooltip} />
        </Box>
      ))}
    </Box>
  );
};

const CustomBarChart = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <Box sx={{ width: "70%" }}>
      <Typography variant="h4" gutterBottom>
        Yearly Count Overview
      </Typography>

      <Box display="flex" gap={4}>
        <Box flex={1} height={400}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              {/* <Legend
                content={
                  () => null
                }
              /> */}
              <Bar dataKey="count" name="Count">
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke={hoveredItem === entry.year ? "black" : "none"}
                    strokeWidth={hoveredItem === entry.year ? 3 : 0}
                    style={{
                      transform:
                        hoveredItem === entry.year
                          ? "scaleY(1.05)"
                          : "scaleY(1)",
                      transition: "all .3s ease-in-out",
                      transformOrigin: "bottom",
                    }}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box>
          <CustomLegend
            data={data}
            hoverIn={(year) => setHoveredItem(year)}
            hoverOut={() => setHoveredItem(null)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomBarChart;

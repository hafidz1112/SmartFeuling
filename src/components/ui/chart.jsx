import { Tooltip, Legend, ResponsiveContainer } from "recharts";

export const ChartContainer = ({ children, config, className }) => {
  return (
    <div
      className={className}
      style={Object.keys(config).reduce((acc, key) => {
        acc[`--color-${key}`] = config[key].color;
        return acc;
      }, {})}
    >
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
};

export const ChartTooltip = ({ cursor, content }) => {
  return <Tooltip cursor={cursor} content={content} />;
};

export const ChartTooltipContent = ({
  active,
  payload,
  label,
  labelFormatter,
  indicator,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-xs">
        <p className="font-bold mb-1">
          {labelFormatter ? labelFormatter(label) : label}
        </p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            {indicator === "dot" && (
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              ></span>
            )}
            <span className="capitalize text-gray-600">{entry.name}:</span>
            <span className="font-bold">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const ChartLegend = ({ content }) => {
  return <Legend content={content} />;
};

export const ChartLegendContent = (props) => {
  const { payload } = props;
  return (
    <div className="flex justify-center gap-4 text-xs mt-2">
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></span>
          <span className="capitalize">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg border shadow-sm ${className}`}>
    {children}
  </div>
);
export const CardHeader = ({ children, className }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
);
export const CardTitle = ({ children, className }) => (
  <h3 className={`font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);
export const CardDescription = ({ children, className }) => (
  <p className={`text-sm text-gray-500 ${className}`}>{children}</p>
);
export const CardContent = ({ children, className }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);
export const CardFooter = ({ children, className }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>
);

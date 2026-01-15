import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  Pie,
  PieChart,
  Bar,
  BarChart,
} from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faCircleCheck,
  faTriangleExclamation,
  faGasPump,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SummaryDashboardModalContent() {
  const summaryCards = [
    {
      title: "Total Transaksi",
      value: "1,247",
      subtext: "▲ +12.5% vs periode lalu",
      subtextClass: "text-blue-600",
      theme: "blue",
      icon: faClipboardList,
    },
    {
      title: "Valid Transactions",
      value: "1,244",
      subtext: "99.76% success rate",
      subtextClass: "text-green-600",
      theme: "green",
      icon: faCircleCheck,
    },
    {
      title: "Fraud Detected",
      value: "3",
      subtext: "0.24% fraud rate",
      subtextClass: "text-red-600",
      theme: "red",
      icon: faTriangleExclamation,
    },
    {
      title: "Total Volume",
      value: "18,542",
      subtext: "Liter BBM terjual",
      subtextClass: "text-violet-600",
      theme: "violet",
      icon: faGasPump,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Filter Stats */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 mb-3 text-sm font-bold text-gray-700">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filter Analisis
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-500">SPBU</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
              <option>Semua SPBU</option>
              <option>SPBU Banda Aceh</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-500">Periode</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
              <option>Hari Ini</option>
              <option>Minggu Ini</option>
              <option>Bulan Ini</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-500">
              Dari Tanggal
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              defaultValue="2026-01-08"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-500">
              Sampai Tanggal
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              defaultValue="2026-01-15"
            />
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {summaryCards.map((card, idx) => (
          <div
            key={idx}
            className={`bg-${card.theme}-50 border border-${card.theme}-100 rounded-lg p-4 relative overflow-hidden`}
          >
            <div className="flex justify-between items-start z-10 relative">
              <div>
                <p className={`text-xs font-bold text-${card.theme}-600 mb-1`}>
                  {card.title}
                </p>
                <h3 className={`text-3xl font-bold text-${card.theme}-700`}>
                  {card.value}
                </h3>
                <p className={`text-xs mt-1 ${card.subtextClass}`}>
                  {card.subtext}
                </p>
              </div>
              {/* Icons would be dynamically rendered here if using the actual component, simulated below */}
              <div
                className={`text-${card.theme}-300 bg-white/50 p-2 rounded-full`}
              >
                <FontAwesomeIcon icon={card.icon} className="text-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartPieVehicle />
        <ChartAreaInteractive />
        <ChartTrafficStacked />
        <ChartPiePayment />
      </div>
    </div>
  );
}

const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#8b5cf6",
  },
};

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="h-full border boundary-gray-200">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row bg-white rounded-t-lg">
        <div className="grid flex-1 gap-1">
          <CardTitle>Revenue Trend</CardTitle>
          <CardDescription>
            Showing total revenue for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 bg-white rounded-b-lg">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function ChartPieVehicle() {
  const chartData = [
    { browser: "car", visitors: 275, fill: "#3b82f6" },
    { browser: "motorcycle", visitors: 200, fill: "#10b981" },
    { browser: "truck", visitors: 187, fill: "#f59e0b" },
    { browser: "bus", visitors: 90, fill: "#ef4444" },
  ];

  const chartConfig = {
    visitors: { label: "Vehicles" },
    car: { label: "Car", color: "#3b82f6" },
    motorcycle: { label: "Motorcycle", color: "#10b981" },
    truck: { label: "Truck", color: "#f59e0b" },
    bus: { label: "Bus", color: "#ef4444" },
  };

  return (
    <Card className="flex flex-col h-full border boundary-gray-200">
      <CardHeader className="items-center pb-0 bg-white rounded-t-lg pt-6">
        <CardTitle>Distribusi Jenis Kendaraan</CardTitle>
        <CardDescription>January - June 2026</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 bg-white">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors" nameKey="browser" />
            <ChartLegend content={<ChartLegendContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm bg-white rounded-b-lg pb-6">
        <div className="flex items-center gap-2 leading-none font-medium text-gray-700">
          Trending up by 5.2% this month{" "}
          <FontAwesomeIcon icon={faArrowTrendUp} className="h-3 w-3" />
        </div>
        <div className="text-gray-400 leading-none text-xs">
          Showing total vehicles for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}

function ChartPiePayment() {
  const chartData = [
    { method: "mypertamina", value: 55, fill: "#6366f1" },
    { method: "cash", value: 25, fill: "#06b6d4" },
    { method: "credit_card", value: 15, fill: "#fb923c" },
    { method: "debit", value: 5, fill: "#ec4899" },
  ];

  const chartConfig = {
    value: { label: "Percentage" },
    mypertamina: { label: "MyPertamina", color: "#6366f1" },
    cash: { label: "Cash", color: "#06b6d4" },
    credit_card: { label: "Credit Card", color: "#fb923c" },
    debit: { label: "Debit", color: "#ec4899" },
  };

  return (
    <Card className="flex flex-col h-full border boundary-gray-200">
      <CardHeader className="items-center pb-0 bg-white rounded-t-lg pt-6">
        <CardTitle>Metode Pembayaran</CardTitle>
        <CardDescription>Payment Preferences</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 bg-white">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="value" nameKey="method" />
            <ChartLegend content={<ChartLegendContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm bg-white rounded-b-lg pb-6">
        <div className="text-gray-400 leading-none text-xs text-center px-4">
          Dominant payment method is MyPertamina (55%)
        </div>
      </CardFooter>
    </Card>
  );
}

function ChartTrafficStacked() {
  const chartData = [
    { date: "2024-07-15", running: 450, swimming: 300 },
    { date: "2024-07-16", running: 380, swimming: 420 },
    { date: "2024-07-17", running: 520, swimming: 120 },
    { date: "2024-07-18", running: 140, swimming: 550 },
    { date: "2024-07-19", running: 600, swimming: 350 },
    { date: "2024-07-20", running: 480, swimming: 400 },
  ];

  const chartConfig = {
    running: {
      label: "Running",
      color: "#2563eb",
    },
    swimming: {
      label: "Swimming",
      color: "#e11d48",
    },
  };

  return (
    <Card className="h-full border boundary-gray-200">
      <CardHeader className="bg-white rounded-t-lg pt-6">
        <CardTitle>Hourly Traffic</CardTitle>
        <CardDescription>
          Daily traffic analysis (Running vs Swimming data)
        </CardDescription>
      </CardHeader>
      <CardContent className="bg-white rounded-b-lg p-6">
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                });
              }}
            />
            <Bar
              dataKey="running"
              stackId="a"
              fill={chartConfig.running.color}
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="swimming"
              stackId="a"
              fill={chartConfig.swimming.color}
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

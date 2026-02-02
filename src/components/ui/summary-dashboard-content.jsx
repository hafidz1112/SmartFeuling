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
        <ChartPieBrand /> {/* Mengganti ChartAreaInteractive dengan ChartPieBrand */}
        <ChartTrafficStacked />
        <ChartPiePayment />
      </div>
    </div>
  );
}

// Data untuk grafik brand kendaraan
const brandData = [
  { brand: "Toyota", count: 320, fill: "#3b82f6" },
  { brand: "Honda", count: 280, fill: "#10b981" },
  { brand: "Suzuki", count: 195, fill: "#f59e0b" },
  { brand: "Mitsubishi", count: 150, fill: "#ef4444" },
  { brand: "Daihatsu", count: 125, fill: "#8b5cf6" },
  { brand: "Yamaha", count: 180, fill: "#06b6d4" },
  { brand: "Lainnya", count: 80, fill: "#64748b" },
];

// Komponen grafik pie untuk brand kendaraan
function ChartPieBrand() {
  const chartConfig = {
    count: { label: "Jumlah" },
    Toyota: { label: "Toyota", color: "#3b82f6" },
    Honda: { label: "Honda", color: "#10b981" },
    Suzuki: { label: "Suzuki", color: "#f59e0b" },
    Mitsubishi: { label: "Mitsubishi", color: "#ef4444" },
    Daihatsu: { label: "Daihatsu", color: "#8b5cf6" },
    Yamaha: { label: "Yamaha", color: "#06b6d4" },
    Lainnya: { label: "Lainnya", color: "#64748b" },
  };

  return (
    <Card className="flex flex-col h-full border boundary-gray-200">
      <CardHeader className="items-center pb-0 bg-white rounded-t-lg pt-6">
        <CardTitle>Distribusi Brand Kendaraan</CardTitle>
        <CardDescription>Data brand kendaraan yang bertransaksi</CardDescription>
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
            <Pie 
              data={brandData} 
              dataKey="count" 
              nameKey="brand" 
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm bg-white rounded-b-lg pb-6">
        <div className="flex items-center gap-2 leading-none font-medium text-gray-700">
          Toyota mendominasi dengan 32% share{" "}
          <FontAwesomeIcon icon={faArrowTrendUp} className="h-3 w-3 text-blue-500" />
        </div>
        <div className="text-gray-400 leading-none text-xs">
          Total 1,330 kendaraan yang terdata
        </div>
      </CardFooter>
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
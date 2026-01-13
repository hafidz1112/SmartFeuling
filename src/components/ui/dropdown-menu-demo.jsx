// src/components/ui/dropdown-menu-demo.jsx
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export function MenuDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="flex justify-between bg-blue-600 hover:bg-blue-700 w-full text-white border-none"
        >
            <div className="flex">
                <h1 className="px-2">=</h1>
                <h2>Menu</h2>
            </div>
            <div>▼</div>
          
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56 p-2">
        <DropdownMenuItem className="flex items-center gap-2 py-2">
          📊 <span>Show Track</span><br/><span className="text-xs text-gray-500">Riwayat transaksi</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex items-center gap-2 py-2">
          🟢 <span>Asset Status</span><br/><span className="text-xs text-gray-500">Status CCTV</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex items-center gap-2 py-2">
          📈 <span>Summary Dashboard</span><br/><span className="text-xs text-gray-500">Analisis & grafik</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex items-center gap-2 py-2">
          📥 <span>Download Report</span><br/><span className="text-xs text-gray-500">Export data</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
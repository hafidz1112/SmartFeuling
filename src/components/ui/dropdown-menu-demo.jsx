// src/components/ui/dropdown-menu-demo.jsx
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCalendar, faBars, faChartSimple, faDownload, faAngleDown} from '@fortawesome/free-solid-svg-icons';

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
            <div className="flex items-center">
                <h1 className="px-2 text-xs"><FontAwesomeIcon icon={faBars} /></h1>
                <h2>Menu</h2>
            </div>
            <div><FontAwesomeIcon icon={faAngleDown} /></div>
          
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56 p-2">
        <DropdownMenuItem className="flex items-center gap-2 py-2">
          <FontAwesomeIcon icon={faCalendar} className="text-blue-600"/>
          <div>
            <span>Show Track</span><br/>
            <span className="text-xs text-gray-500">Riwayat transaksi</span>
          </div>
          
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex items-center gap-2 py-2">
          <FontAwesomeIcon icon={faVideo} className="text-green-600"/>
          <div>
            <span>Asset Status</span><br/>
            <span className="text-xs text-gray-500">Status CCTV</span>
          </div>
          
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex items-center gap-2 py-2">
          <FontAwesomeIcon icon={faChartSimple} className="text-blue-600"/>
          <div>
            <span>Summary Dashboard</span><br/>
            <span className="text-xs text-gray-500">Analisis & grafik</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex items-center gap-2 py-2">
          <FontAwesomeIcon icon={faDownload} className="text-violet-600"/>
          <div>
            <span>Download Report</span><br/>
            <span className="text-xs text-gray-500">Export data</span>
          </div>
          
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
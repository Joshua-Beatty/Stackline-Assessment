import { useEffect, useState } from "react"
import type dataType from "../../assets/data.json"
import Card from "../../components/Card"
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const tickFormatter = (tick: any) => {
  const date = new Date(tick)
  date.setDate(date.getDate() + 1)
  return date.toLocaleString("en-US", { month: "short" })
}

const numberFormatter = (value: any) => 
    new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
    }).format(value as any)
function SalesGraph({ data }: { data: (typeof dataType)[0] }) {
  const [manualTicks, setTicks] = useState<string[]>([])

  //We want to show only the ticks that have a new label, so we manually specify which ticks to show
  //This is so we do not show "Jan, Jan, Jan, Feb, Feb" etc
  useEffect(() => {
    const newTicks: string[] = []

    let lastTick = ""
    for (const sale of data.sales) {
      const tickLabel = tickFormatter(sale.weekEnding)
      if (tickLabel !== lastTick) {
        newTicks.push(sale.weekEnding)
        lastTick = tickLabel
      }
    }

    setTicks(newTicks)
  }, [data])

  return (
    <Card className="flex flex-col">
      <div className="p-6">
        <h3>Retail Sales</h3>
      </div>
      <div className="w-full h-100">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data.sales}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="weekEnding"
              tickFormatter={tickFormatter}
              interval={0}
              ticks={manualTicks}
            />
            <YAxis
              type="number"
              tickFormatter={numberFormatter}
            />
            <Tooltip
              labelFormatter={value => {
                return `Week Ending ${(new Date(value)).toLocaleDateString()}`
              }}
              formatter={numberFormatter}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="retailSales"
              name="Retail Sales"
              stroke="#41A5F6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="retailerMargin"
              name="Retailer Margin"
              stroke="#9BA6BF"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
export default SalesGraph

import { useState } from "react"
import type dataType from "../../assets/data.json"
import Card from "../../components/Card"

function ProductInfo({ data }: { data: (typeof dataType)[0] }) {
  return (
    <Card className="basis-70 min-h-100% flex flex-col items-center">
      <img src={data.image} alt={"Image of" + data.title} className="w-3/5" />
      <h2 className="text-[#384559] font-bold">{data.title}</h2>
      <h3 className="text-[#AEB9CE] w-4/6 text-sm text-center pb-4">
        {data.subtitle}
      </h3>
      <div className="border-t-1 border-b-1 border-[#F7F8FA] w-full p-4 flex flex-wrap flex-row gap-2 justify-start">
        {data.tags.map(tag => (
          <>
            <div className="rounded-md border-1 border-[#F7F8FA] pt-1 pb-1 pr-4 pl-4 text-[#3E485F] text-xs">
              <p>{tag}</p>
            </div>
          </>
        ))}
      </div>
    </Card>
  )
}
export default ProductInfo

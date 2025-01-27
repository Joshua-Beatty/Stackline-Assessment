import { useState } from "react"
import styles from "./Quotes.module.css"
import { useGetSalesQuery } from "./dataAPI"
import ProductInfo from "./ProductInfo"
import Card from "../../components/Card"
import SalesGraph from "./SalesGraph"

export const SalesInfo = () => {
  const { data, isError, isLoading, isSuccess } = useGetSalesQuery()

  //Assuming that this api could return more then one product
  const [selectedIndex, _setSelectedIndex] = useState(0)

  if (isError) {
    return (
      <div>
        <h1>There was an error!</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="flex flex-row p-6 gap-6 grow pt-16">
        <ProductInfo data={data[selectedIndex]} />
        <div className="grow flex flex-col gap-6">
          <SalesGraph data={data[selectedIndex]} />
          <Card>
            <div className="p-6 h-100">
              <h3>Sales Chart</h3>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return null
}

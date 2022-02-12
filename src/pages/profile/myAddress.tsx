import { Header } from "../../components/Header";
import { MyAddressList } from "../../components/PageProfile/MyAddress";

export default function MyAddressPage() {
  return (
    <div className="mainContainer">
      <Header />

      <MyAddressList />
    </div>
  )
}

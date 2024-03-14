import "./App.css";
import { RevenueCard } from "./components/RevenueCard";

function App() {
  return (
    <>
      <div className="grid grid-cols-4">
        <RevenueCard
          title={"Amount pending ?"}
          amount={"92,312.30"}
          orderCount={124}
        />
      </div>
    </>
  );
}

export default App;

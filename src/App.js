import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Content/Banner";
import Phil from "./Content/Phil";
import Criteria from "./Content/Criteria";
import Diff from "./Content/Diff";
import Form from "./Content/Form";
import Footer from "./Content/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Phil />
      <Criteria />
      <Diff />
      <Form />
      <Footer />
    </div>
  );
}

export default App;

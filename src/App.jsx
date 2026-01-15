import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SuccessStory from "./Pages/SuccessStory";
import Footer from "./Components/Footer";
import TopHeader from "./UI/TopHeader";
import Contactus from "./Pages/Contactus";
import Aboutus from "./Pages/Aboutus";
import Destinations from "./Pages/Destinations";
import ApplyOnline from "./Pages/ApplyOnline";
import BookOnlineConsultancy from "./Pages/BookOnlineConsultancy";
import Ukservices from "./Pages/Ukservices";
import WorkVisa from "./Pages/WorkVisa";
import VisitVisa from "./Pages/VisitVisa";
import StudyVisa from "./Pages/StudyVisa";
import Immagration from "./Pages/Immagration";
import CEOMessage from "./Pages/CEOMessage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatsAppFloatButton from "./Components/FloatingWhatsapp";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <WhatsAppFloatButton />
        <TopHeader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success-story" element={<SuccessStory />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/Destination" element={<Destinations />} />
          <Route path="/apply-online" element={<ApplyOnline />} />
          <Route
            path="/Book-Online-Consultancy"
            element={<BookOnlineConsultancy />}
          />
          <Route path="/uk-services" element={<Ukservices />} />
          <Route path="/Work-visa" element={<WorkVisa />} />
          <Route path="/visit-visa" element={<VisitVisa />} />
          <Route path="/study-visa" element={<StudyVisa />} />
          <Route path="/immigration" element={<Immagration />} />
          <Route path="/our-ceo" element={<CEOMessage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

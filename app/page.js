
import Frame1 from "@/homeComponent/Frame1";
import Frame3 from "@/homeComponent/Frame3";
import Frame5 from "@/homeComponent/Frame5";
import Testimonial from "@/homeComponent/Testimonial";
import Unique from "@/homeComponent/unique";

export default function Home() {
  return (
    <div>
      <div className="font-gentium overflow-x-hidden">
        <Frame1 />
        <Frame3 />
        <Unique />
        <Testimonial />
        <Frame5 />
      </div>
    </div>
  );
}

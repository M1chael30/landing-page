import CapstoneTitle from "./capstone-page/CapstoneTitle";
import Development from "./capstone-page/Development";
import Impact from "./capstone-page/Impact";
import KeyFeatures from "./capstone-page/KeyFeatures";
import Problem from "./capstone-page/Problem";
import Purpose from "./capstone-page/Purpose";

const CapstonePage = () => {
 return (
  <>
   <CapstoneTitle />
   <Purpose />
   <Problem />
   <KeyFeatures />
   <Impact />
   <Development />
  </>
 );
};

export default CapstonePage;

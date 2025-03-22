import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bookmark } from "lucide-react";

const OurVision = () => {
 return (
  <>
   <Card>
    <CardHeader>
     <CardTitle>
      <h3 className="text-2xl font-semibold tracking-wide border-b flex items-center gap-1">
       Our Vision <Bookmark />
      </h3>
     </CardTitle>
    </CardHeader>
    <CardContent>
     <p className="leading-7 [&:not(:first-child)]:mt-6 tracking-wide">
      We believe that education should be{" "}
      <strong>accessible, organized, and engaging </strong>. Through our school
      portal, we aim to bridge gaps in communication and create an innovative
      digital learning environment.
     </p>
     <p className="leading-7 [&:not(:first-child)]:mt-6 tracking-wide">
      Join us on this journey as we transform education through technology!
     </p>
    </CardContent>
   </Card>
  </>
 );
};

export default OurVision;

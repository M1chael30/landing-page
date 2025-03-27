import { KeyRoundIcon } from "lucide-react";

const KeyFeatures = () => {
 const keyFeaturesData = [
  {
   feature: "Student Information System",
   description: "Easy access to grades, attendance, and schedules.",
  },
  {
   feature: "Teacher Portal",
   description: "Simplified grading and communication tools.",
  },
  {
   feature: "Administrative Dashboard",
   description: "Streamlined management of school operations.",
  },
  {
   feature: "Interactive Features",
   description: "Discussion boards, announcements, and event updates.",
  },
 ];

 return (
  <>
   <section className="my-2 flex justify-center">
    <img
     src="src\assets\dataflow.png"
     alt="student portal data flow"
     className="rounded-lg w-100 h-100"
    />
   </section>
   <section className="my-2">
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-wide flex items-center gap-1">
     Key Features <KeyRoundIcon />
    </h3>
    <div className="my-4 w-full overflow-y-auto">
     <table className="w-full">
      <thead>
       <tr className="m-0 border-t p-0 even:bg-muted">
        <th className="border px-4 py-2 tracking-wide text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
         Feature
        </th>
        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
         Description
        </th>
       </tr>
      </thead>
      <tbody>
       {keyFeaturesData.map((keydata) => {
        return (
         <tr className="m-0 border-t p-0 even:bg-muted" key={keydata.feature}>
          <td className="border tracking-wide px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
           {keydata.feature}
          </td>
          <td className="border tracking-wide px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
           {keydata.description}
          </td>
         </tr>
        );
       })}
      </tbody>
     </table>
    </div>
   </section>
  </>
 );
};

export default KeyFeatures;

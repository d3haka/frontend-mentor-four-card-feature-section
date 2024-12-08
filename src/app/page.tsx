import Card from "@/components/card";

export default function Home() {
   return (
      <div className="flex h-full w-full flex-col items-center pt-14">
         <p className="mb-5 px-2 text-3xl font-extralight">Reliable, Efficient delivery</p>
         <p className="mb-10 px-2 text-3xl font-semibold">Powered by Technology</p>
         <p className="max-w-[50ch] px-2 text-center text-sm leading-[2] text-gray-400">
            Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is
            successful
         </p>
         <div className="my-14 flex w-full flex-col items-center justify-center gap-7 md:flex-row">
            <Card
               bandColor="bg-primary-cyan"
               title="Supervisor"
               desc="Monitors activity to identify project roadblocks"
               icon="icon-supervisor.svg"
            />
            <div className="flex flex-col gap-7">
               <Card
                  bandColor="bg-primary-red"
                  title="Team Builder"
                  desc="Scans our talent network to create the optimal team for your project"
                  icon="icon-team-builder.svg"
               />
               <Card
                  bandColor="bg-primary-orange"
                  title="Karma"
                  desc="Regularly evaluates our talent to ensure quality"
                  icon="icon-karma.svg"
               />
            </div>
            <Card
               bandColor="bg-primary-blue"
               title="Calculator"
               desc="Uses data from past projects to provide better delivery estimates"
               icon="icon-calculator.svg"
            />
         </div>
      </div>
   );
}

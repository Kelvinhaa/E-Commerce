import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <Button variant={"custom_button"}>
          Click me
        </Button>
      </div>
      <div>
        <Input type="email" placeholder="Email"> 

        </Input>
      </div>
      <div>
        <Progress value={33} />
      </div>
      <div>
        <Textarea placeholder="Here">

        </Textarea>
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
}

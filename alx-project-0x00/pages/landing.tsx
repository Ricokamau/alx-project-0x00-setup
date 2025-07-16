import Card from "@/components/Card"
import Button from "@/components/Button";


const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small" styles="text-sm rounded-sm" />
<Button title="Medium" styles="text-base rounded-md" />
<Button title="Large" styles="text-lg rounded-full" />

    </div>
  );
};

export default Landing;

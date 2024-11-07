
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Tickets from "@/components/Tickets";


const App = () => {
  return (
    <DefaultLayout>
        <div className="min-h-full flex justify-center">
            <Tickets/>
        </div>    
    </DefaultLayout>
  );
};

export default App;

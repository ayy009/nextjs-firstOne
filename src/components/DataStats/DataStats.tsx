const Statistic = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid row-gap-8 sm:grid-cols-3">
          <div className="text-center">
            <h6 className="text-5xl font-bold text-lime-500">144K</h6>
            <p className="font-bold">Active</p>
          </div>
          <div className="text-center">
            <h6 className="text-5xl font-bold text-amber-500">12.9K</h6>
            <p className="font-bold">InActive</p>
          </div>
          <div className="text-center">
            <h6 className="text-5xl font-bold text-red-500">27.3K</h6>
            <p className="font-bold">Retumed</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Statistic;
  
import Parent from "../Propdrilling/Propdrilling";
import Recipes from "../Render-List/Recipes";

const Topiccss = () => {
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
      <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-200 text-surface shadow-secondary-2 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight">
            Prop Drilling
          </h5>
          <p className="mb-4 text-base">
            <Parent />
          </p>
        </div>
      </div>
      <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-200 text-surface shadow-secondary-2 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight">
            Render Lists
          </h5>
          <p className="mb-4 text-base">
            <Recipes />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topiccss;

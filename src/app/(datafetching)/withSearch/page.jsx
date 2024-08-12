
import Meals from "./Meals";

const WithSearch =  () => {
    return (
        <div className="overflow-x-auto h-screen">
            <h2 className="text-3xl font-semibold text-red-400">Choose your Meals</h2>
            <p>Choose of you choice by Searching.......</p>
            <Meals/>
        </div>
    );
};

export default WithSearch;
import PageSetup from "./PageSetup";
import Images from "./Images"
import IndexPH from "./(indexPH)/IndexPH";
import Theme from "./Theme";
import GitGitHub from "./GitGitHub/GitGitHub";
const Tools = () => {
    return (
        <>
           <PageSetup/>
           <Theme/>
           <Images/>
           <IndexPH/>
           <GitGitHub/>
        </>
    );
};

export default Tools;
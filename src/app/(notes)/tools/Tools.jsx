import PageSetup from "./PageSetup";
import Images from "./Images"
import Index from "./Index";
import Theme from "./Theme";
import GitGitHub from "./GitGitHub/GitGitHub";
const Tools = () => {
    return (
        <>
           <PageSetup/>
           <Theme/>
           <Images/>
           <Index/>
           <GitGitHub/>
        </>
    );
};

export default Tools;
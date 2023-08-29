import logo from './logo.svg';
import './App.css';
import { VariableNames } from './components/variableNames';
import { UserAllInformation, UserCardHeader } from './components/breakDownComponents';
import { UserCards } from './components/breakDownComponents/UserCards';
import { DesestructuringObjects } from './components/desustructuringObjects';
import Posts from './components/Posts/Posts';
import PostsWithHooks from './components/Posts/PostsWithHooks';
import PostWithHookCaro from './components/Posts/PostWithHookCaro';
import { GenericCard, GenericCardComposition } from './components/GenericCard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        {/* 1. CLEAN CODE WITH VARIABLE NAMES - WORKSHOP */}
         {/* <VariableNames /> */}

        {/* 2. CLEAN CODE - BREAKDOWN COMPONENTS WHY IS IMPORTANT? */}
        {/* <UserAllInformation name="Fernando" level="MidSenior" shortDescription="lorem ipsum dolor a itusn moslieh qwttksn  loipis harsha" /> */}
        {/* <UserCards name="Fernando" level="MidSenior" shortDescription="lorem ipsum dolor a itusn moslieh qwttksn  loipis harsha" /> */}
      
        {/* DESTRUCTURING OBJECTS - WHY YOU CONSIDER IS IT A GOOD PRACTICE? */}
       {/*  <DesestructuringObjects /> */}

       {/* 2. CLEANCODE WITH CUSTOM HOOKS - WORKSHOP */}
       {/* <Posts /> */}
       {/* <PostsWithHooks /> */}
       {/* <PostWithHookCaro /> */}

      {/* 3. CLEANCODE WITH USE COMPOSITION COMPONENTS */}
      {/* <GenericCard title="Hellow World" imageName="userIcon" /> */}

      </body>
    </div>
  );
}

export default App;

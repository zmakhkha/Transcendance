import Data from "../Data/LeaderBoardData.json";

function getTop3() {
  const LeaderBoardData = Data;
  return (
    <div className="Top3">
      <div className="First">
        <img className="topImgs" src={LeaderBoardData.LeaderBoard[0].picture} alt="FirstPic" />
        <h1 className="toph1">{LeaderBoardData.LeaderBoard[0].username}</h1>
        <div className="Coins"><h2>200 Coins</h2></div>
      </div>
      <div className="SecondThird">
        <div className="Second">
          <img className="topImgs" src={LeaderBoardData.LeaderBoard[1].picture} alt="SecondPic" />
          <h1 className="toph1">{LeaderBoardData.LeaderBoard[1].username}</h1>
          <div className="Coins"><h2>100 Coins</h2></div>
        </div>
        <div className="Third">
          <img className="topImgs" src={LeaderBoardData.LeaderBoard[2].picture} alt="ThirdPic" />
          <h1 className="toph1">{LeaderBoardData.LeaderBoard[2].username}</h1>
          <div className="Coins"><h2>50 Coins</h2></div>
        </div>
      </div>
    </div>
  );
}

function getTheRest() {
  const LeaderBoardData = Data;
  return (
    <>
      {/* <div className="LeaderBoardToolTip">
        <div className="TooltipLeft">
          <div className="TooltipLeftRank">
            <h1>Rank</h1>
            <div/>
          </div>
          <div/>
        </div>
        <div className="TooltipRight">
          <div className="TooltipRightUser"><h1>UserName</h1></div>
          <div className="TooltipRightRest">
            <h1 className="TooltipRightWins">Games Won</h1>
            <h1 className="TooltipRightLevel">Level</h1>
          </div>
        </div>
      </div> */}
      <div className="LeaderBoardRest">
        <ul>
          {LeaderBoardData.LeaderBoard.map((user) => (
            (user.id > 3 && 
            <li key={user.id} id={user.id.toString()} className={user.id % 2 == 0 ? "SpecialCase" : ""}>
              <div className="LeaderRestLeft">
                <div className="idAndLine">
                  <h1>{user.id}</h1>
                  <div className="lineLi"/>
                </div>
                <img className="RestImgs" src={user.picture} alt="userPic" />
              </div>
              <div className="LeaderRestRight">
                <div className="LeaderRestRighUsrtName"><h1>{user.username}</h1></div>
                <div className="LeaderRestRightLvl">
                  <h1 className="UserGamesWon">{user.games_won}</h1>
                  <h1 className="UserLevel">{user.level}</h1>
                </div>
              </div>
            </li>)
          ))}
        </ul>
      </div>
    </>

  );
}

function LeaderBoardMain() {
  return (
    <div className="LeaderBoardContainer">
      <h1>LEADERBOARD</h1>
      {getTop3()}
      {getTheRest()}
    </div>
  );
}

export default LeaderBoardMain;


import { useEffect, useState } from 'react'
import './rps2.css'

function RPS2() {
    let [pScore, setPScore] = useState(0);
    let [cScore, setCScore] = useState(0);
    let [pChoice, setPchoice] = useState("-");
    let [cChoice, setCchoice] = useState("-");
    let [special, setSpecial] = useState("-");
    const moves = ["Rock", "Paper", "Scissors"];
    const specialMoves = ["Water", "Fire", "Hammer"];

    useEffect(() => {
        if (pScore >= 15) {
            window.alert("You won");
            location.reload();
        }
        if (cScore >= 15) {
            window.alert("Computer won");
            location.reload();
        }

    })

    function evaluate(e) {
        let pBox = document.getElementById("pbox");
        let cBox = document.getElementById("cbox");
        pBox.classList.remove(pChoice);
        cBox.classList.remove(cChoice);
        pChoice = e.target.value;
        if (Math.floor(Math.random() * 100) % 5 == 0)
            cChoice = specialMoves[Math.floor(Math.random() * specialMoves.length)];
        else
            cChoice = moves[Math.floor(Math.random() * moves.length)];
        pBox.classList.add(pChoice);
        cBox.classList.add(cChoice);
        if (pChoice != cChoice)
            switch (pChoice) {
                case "Rock": cChoice === "Paper" || cChoice == "Water" || cChoice == "Hammer" ? ++cScore : cChoice == "Fire" ? pScore += 2 : ++pScore;
                    break;
                case "Paper": cChoice === "Scissors" || cChoice == "Water" || cChoice == "Fire" ? ++cScore : cChoice == "Hammer" ? pScore += 2 : ++pScore;
                    break;
                case "Scissors": cChoice === "Rock" || cChoice == "Hammer" || cChoice == "Fire" ? ++cScore : cChoice == "Water" ? pScore += 2 : ++pScore;
                    break;
                case "Water": cChoice === "Rock" || cChoice == "Paper" ? ++pScore : cChoice == "Scissors" ? cScore += 2 : (pScore--, cScore--);
                    break;
                case "Fire": cChoice === "Paper" || cChoice == "Scissors" ? ++pScore : cChoice == "Rock" ? cScore += 2 : (pScore--, cScore--);
                    break;
                case "Hammer": cChoice === "Scissors" || cChoice == "Rock" ? ++pScore : cChoice == "Paper" ? cScore += 2 : (pScore--, cScore--);
                    break;
            }
        if (special == "-" && Math.floor(Math.random() * 100) % 3 == 0) {
            const specialBtn = document.getElementById("spcl");
            let randomNO = Math.floor(Math.random() * specialMoves.length);
            special = specialMoves[randomNO];
            specialBtn.classList.add(specialMoves[randomNO]);
            setSpecial(special);
        }
        setPchoice(pChoice);
        setCchoice(cChoice);
        setPScore(pScore);
        setCScore(cScore);
    }
    return (
        <>
            <button className='help' onClick={() => {
                window.alert("Normal Rock, Paper, Scissors rules with a slight chance to get one of the extra 3 moves Water, Fire, Hammer. Water -> (Rock & Paper), Fire -> (Paper & Scissors), Hammer -> (Scissors & Rock). But these special moves are twice weak to the remaining moves(-2 points)");
            }}>?</button>
            <div className="logo">
                <h1 className='logo'>Rock, Paper, Scissors: 2</h1>
            </div>
            <div className="maincontainer">
                <div className="game">
                    <div className="pointsContainer">
                        <span>Player: {pScore}</span>  <br />
                        <span>Computer: {cScore}</span>
                    </div>
                    <div className="choiceContainer">
                        Player-<button className="none moves" id="pbox"></button>
                        <button className="none moves" id="cbox"></button>-Computer <br />
                    </div>
                    <div className="playerchoice">
                        <button className="moves Rock" value="Rock" onClick={e => {
                            evaluate(e);
                        }}></button>
                        <button className="moves Paper" value="Paper" onClick={e => {
                            evaluate(e);
                        }}></button>
                        <button className="moves Scissors" value="Scissors" onClick={e => {
                            evaluate(e);
                        }}></button>
                        <button id="spcl" className="none moves special" value={special} onClick={e => {
                            if (e.target.value === "-")
                                window.alert("No special moves unclocked yet")
                            else {
                                evaluate(e);
                                setSpecial("-");
                                e.target.classList.remove(special);
                            }
                        }}></button>
                    </div>
                    <button className="status" onClick={() => {
                        location.reload();
                    }}>Restart</button>
                </div>
            </div>
        </>
    )
}

export default RPS2
import React from 'react';
import ReactDOM from 'react-dom';
import Dragula from 'react-dragula';
import classNames from 'classnames';
import '../Dragula.css';

export default class Dragable extends React.Component {

  componentDidMount() {
    Dragula([document.getElementById("bank"), document.getElementById("proposal-1"), document.getElementById("proposal-2"), document.getElementById("proposal-3"), document.getElementById("proposal-4"), , document.getElementById("proposal-5")]);
  }

  render() {

    return (
      <div className="dragableWrapper">

        <div id="bank-text" className="banktext"><p>Dra pengar till de förslag du tycker om. Men tänk på att budgeten är begränsad.</p></div>
        <div id="bank" className="container dragable-sort">
          <div><img src="./coin.png" className="coin" /></div>
          <div><img src="./coin.png" className="coin" /></div>
          <div><img src="./coin.png" className="coin" /></div>
          <div><img src="./coin.png" className="coin" /></div>
          <div><img src="./coin.png" className="coin" /></div>
          <div><img src="./coin.png" className="coin" /></div>
          <div><img src="./coin.png" className="coin" /></div>
          <div><img src="./coin.png" className="coin" /></div>
          <div><img src="./coin.png" className="coin" /></div>
          <div><img src="./coin.png" className="coin" /></div>
        </div>

        <div id="proposal-1-text" className="proposaltext"><p>Kraftigt utbyggd tunnelbana</p></div>
        <div id="proposal-1" className="container dragable-sort">

        </div>

        <div id="proposal-2-text" className="proposaltext"><p>Alla över 85 som vill ska få plats på servicehus</p></div>
        <div id="proposal-2" className="container dragable-sort">

        </div>

        <div id="proposal-3-text" className="proposaltext"><p>Fler och bättre bibliotek, nya scener och en växande barnkultur</p></div>
        <div id="proposal-3" className="container dragable-sort">

        </div>

        <div id="proposal-4-text" className="proposaltext"><p>Lys upp utemiljön och ha fler synliga poliser och kameror</p></div>
        <div id="proposal-4" className="container dragable-sort">

        </div>

        <div id="proposal-5-text" className="proposaltext"><p>Giftfri stad 2030</p></div>
        <div id="proposal-5" className="container dragable-sort">

        </div>
      </div>
    );
  }

}

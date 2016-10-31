var Poker = React.createClass({
  render: function() {
    return <div>
      <h1 className="text-center">Poker</h1>
      <div className="row text-center">
      	<div className="col-md-2 col-md-offset-1">
      		<p>CARD &spades;</p>
      	</div>
      	<div className="col-md-2">
      		<p>CARD &hearts;</p>
      	</div>
      	<div className="col-md-2">
      		<p>CARD &diams;</p>
      	</div>
      	<div className="col-md-2">
      		<p>CARD &clubs;</p>
      	</div>
      	<div className="col-md-2">
      		<p>CARD &diams;</p>
      	</div>
      </div>
    </div>
  }
});

React.render(<div>
              <Poker />
             </div>, document.getElementById('react-container')
);

import '../css/story-card.css';
import mailStripes from '../media/mail-stripes.svg';

function StoryCard(props) {
  return (
    <div className='story-card'>
      <div className='content-container'>
        <div className='info-container'>
          <div className='header-text'>TITLE</div>
          <div>{props.title}</div>
          <div className='header-text'>AUTHOR</div>
          <div>{props.author}</div>
        </div>

        <div className='divider-container'>
          <span style={{"backgroundColor": "white", "writing-mode": "vertical-lr", "transform": "rotate(180deg)", "padding-top": "10px", "padding-bottom": "10px"}}>Emotica</span>
        </div>

        <div className='description-container'>
          <div style={{"padding-bottom": "10px"}}>
            Summary<br/>
            {props.description}
          </div>
          <div style={{"border-top":"3px dotted black", "padding-top": "10px"}}>
          Story<br />
          {props.body}
          </div>
        </div>

      </div>

      <div className='deco-container'></div>
    </div>
  );
}

export default StoryCard;
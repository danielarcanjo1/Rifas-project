import PropTypes from 'prop-types';

export default function CurrentCampaing(props) {
  return (
    <div className="bg-white h-1/2 w-auto mt-6 p-4">
        <div>
          <img src={props.imgSrc} alt="banner campanha" />
          <div>
            {props.campaignEdition}
          </div>
        </div>

    </div>
  )
}

CurrentCampaing.propTypes = {
  imgSrc: PropTypes.string,
  campaignEdition: PropTypes.string
}
import React from 'react'
import "../assets/css/Ngmap.scss"
import OgunStateSvg from './states/ogun'
import LagosStateSvg from './states/lagos'
import KogiStateSvg from './states/kogi'
import OndoStateSvg from './states/ondo'
import EdoStateSvg from './states/edo'
import NigerStateSvg from './states/niger'
import KwaraStateSvg from './states/kwara'
import { getStateWinner, getPoliticalPartyColor } from "../helpers/analyse-election-data"
import OyoStateSvg from './states/oyo'
import OsunStateSvg from './states/osun'
import EkitiStateSvg from './states/ekiti'
import ZamfaraStateSvg from './states/zamfara'
import SokotoStateSvg from './states/sokoto'
import KebbiStateSvg from './states/kebbi'
import NasarawaStateSvg from './states/nasarawa'
import BauchiStateSvg from './states/bauchi'
import KadunaStateSvg from './states/kaduna'
import KanoStateSvg from './states/kano'
import KatsinaStateSvg from './states/katsina'
import JigawaStateSvg from './states/jigawa'
import YobeStateSvg from './states/yobe'
import BornoStateSvg from './states/borno'
import AdamawaStateSvg from './states/adamawa'
import GombeStateSvg from './states/gombe'
import PlateauStateSvg from './states/plateau'
import BenueStateSvg from './states/benue'
import EbonyiStateSvg from './states/ebonyi'
import CrossRiverStateSvg from './states/cross-river'
import AkwaIbomStateSvg from './states/akwa-ibom'
import EnuguStateSvg from './states/enugu'
import AnambraStateSvg from './states/anambra'
import BayelsaStateSvg from './states/bayelsa'
import RiversStateSvg from './states/rivers'
import ImoStateSvg from './states/imo'
import AbiaStateSvg from './states/abia'
import DeltaStateSvg from './states/delta'
import TarabaStateSvg from './states/taraba'
import FCTStateSvg from './states/fct'


const Map = ({stateData}) => {
 


  return (
    <div className='map-div'>
      <svg width="965" height="787" viewBox="0 0 965 787" fill="none" xmlns="http://www.w3.org/2000/svg">
        <KogiStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Kogi'))} />
        <OndoStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Ondo'))} />
        <EdoStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Edo'))} />
        <NigerStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Niger'))} />
        <KwaraStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Kwara'))} />
        <OyoStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Oyo'))} />
        <OgunStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Ogun'))} />
        <LagosStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Lagos'))} />
        <OsunStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Osun'))} />
        <EkitiStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Ekiti'))} />
        <ZamfaraStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Zamfara'))} />
        <SokotoStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Sokoto'))} />
        <KebbiStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Kebbi'))} />
        <NasarawaStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Nasarawa'))} />
        <BauchiStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Bauchi'))} />
        <KadunaStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Kaduna'))} />
        <KanoStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Kano'))} />
        <KatsinaStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Katsina'))} />
        <JigawaStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Jigawa'))} />
        <YobeStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Yobe'))} />
        <BornoStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Borno'))} />
        <AdamawaStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Adamawa'))} />
        <GombeStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Gombe'))} />
        <PlateauStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Plateau'))} />
        <BenueStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Benue'))} />
        <EbonyiStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Ebonyi'))} />
        <CrossRiverStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Cross River'))} />
        <AkwaIbomStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Akwa Ibom'))} />
        <EnuguStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Enugu'))} />
        <AnambraStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Anambra'))} />
        <BayelsaStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Bayelsa'))} />
        <RiversStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Rivers'))} />
        <ImoStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Imo'))} />
        <AbiaStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Abia'))} />
        <DeltaStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Delta'))} />
        <TarabaStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'Taraba'))} />
        <FCTStateSvg color={getPoliticalPartyColor(getStateWinner(stateData, 'FCT'))} />
      </svg>
    </div>
  )
}

export default Map
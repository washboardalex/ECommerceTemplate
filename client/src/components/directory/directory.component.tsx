import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import IDirectoryItem from '../../types/models/IDirectoryItem';
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { AppState } from '../../redux/_root-reducer';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


interface IDirectoryProps {
    sections: Array<IDirectoryItem>
}

const Directory : React.FunctionComponent<IDirectoryProps> = ({ sections }) => (
  <div className='directory-menu'>
      {sections.map(({ ...sectionProps }) => 
        <MenuItem key={sectionProps.id} {...sectionProps} />
      )}
  </div>
);

const mapStateToProps = createStructuredSelector<AppState, IDirectoryProps>({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
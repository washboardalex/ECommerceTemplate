import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import MenuItem from '../menu-item/menu-item.component';
import IDirectoryItem from '../../types/models/IDirectoryItem';
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import './directory.styles.scss';
import { AppState } from '../../redux/_root-reducer';

interface IDirectoryProps {
    sections: Array<IDirectoryItem>
}

const Directory = ({ sections } : IDirectoryProps) => (
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
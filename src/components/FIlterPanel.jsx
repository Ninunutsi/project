
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const FilterPanel = ({ isOpen, handleStatusOpen, status, filters, handleCheckboxChange, isSexOpen, handleSexOpen }) => {
  return (
    isOpen && (
      <div className="filter-pupUp">
        <div className="status">
        <h3 onClick={handleStatusOpen}><FontAwesomeIcon icon={faAngleRight} /> სტუდენტის სტატუსი</h3>
        {status && <>
          <label htmlFor="active">
          <input type="checkbox" 
                  name='active'
                  id='active'  
                  checked={filters.isActive}
                  onChange={() => handleCheckboxChange('isActive')}/>
          ACTIVE
        </label>
        <label htmlFor="inactive">
          <input type="checkbox" 
                  name="inactive" 
                  id="inactive" 
                  checked={filters.isInactive}
                  onChange={() => handleCheckboxChange('isInactive')}/>
          INACTIVE
        </label>
        </>}
      </div>
      <div className="status">
      <h3 onClick={handleSexOpen}><FontAwesomeIcon icon={faAngleRight} /> სქესი</h3>
        {isSexOpen && <>
          <label htmlFor="male">
          <input type="checkbox" 
                  name='male'
                  id='male'  
                  checked={filters.isMale}
                  onChange={() => handleCheckboxChange('isMale')}/>
          MALE
        </label>
        <label htmlFor="female">
          <input type="checkbox" 
                  name="female" 
                  id="female" 
                  checked={filters.isFemale}
                  onChange={() => handleCheckboxChange('isFemale')}/>
          Female
        </label>
        </>}
      </div>
      </div>
    )
  );
};

export default FilterPanel;

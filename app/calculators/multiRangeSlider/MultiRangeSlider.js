'use client'

import Styles from './mulltiRangeSlider.module.css';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const MultiRangeSlider = ({min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - 0) / (100 - 0)) * 100),
    []
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className={Styles.container}>
      <div>
        <input
          type="range"
          // defaultValue={28}
          min={0}
          max={100}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className={`${Styles.thumb} ${Styles.thumb__left}`}
          style={{ zIndex: minVal > 100 - 100 && '5' }}
          />
        <input
          type="range"
          // defaultValue={60}
          min={0}
          max={100}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className={`${Styles.thumb} ${Styles.thumb__right}`}
          />
      </div>
      <div className={Styles.slider}>
        <div className={Styles.slider__track} />
          <div ref={range} className={Styles.slider__range} />
            <div className={Styles.slider__left_value}>
              <div>Current Age</div>
              <div>{minVal} years old</div>
            </div>
            <div className={Styles.slider__right_value}>  
              <div>Retirement Age</div>
              <div>{maxVal} years old</div>
          </div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;

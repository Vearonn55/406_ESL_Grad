import React from 'react';
import './AlertFilter.css';

interface AlertFilterProps {
    selectedType: string; // 'All', 'PriceThresholdExceeded', 'NearExpiry'
    onTypeChange: (type: string) => void;
}

const AlertFilter: React.FC<AlertFilterProps> = ({ selectedType, onTypeChange }) => {
    return (
        <div className="alert-filter-container">
            <label htmlFor="alertTypeSelect">Filter by Type:</label>
            <select
                id="alertTypeSelect"
                value={selectedType}
                onChange={(e) => onTypeChange(e.target.value)}
            >
                <option value="All">All Alerts</option>
                <option value="PriceThresholdExceeded">Price Threshold Exceeded</option>
                <option value="NearExpiry">Near Expiry</option>
            </select>
        </div>
    );
};

export default AlertFilter;

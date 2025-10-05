import React, { useState, useEffect } from 'react';
import { MdEdit } from "react-icons/md";

import Card from './components/Card';
import ImageUploadCard from './components/ImageUploadCard';
import EditableList from './components/EditableList';
import RatingEditor from './components/RatingEditor';

const BreedInfoEditor = () => {
  const initialData = {
    breed: "German Shepherd",
    species: "Dog",
    general_info: {
      breedGroup: "Working",
      description: "German Shepherds are intelligent, loyal, and protective dogs.",
      temperament: "Smart, loyal, and protective",
      height: "22 to 26 inches",
      weight: "50 to 90 pounds",
      lifeExpectancy: "7 to 10 years"
    },
    ratings: {
      energyLevel: 5,
      barkingLevel: 4,
      drooling: 1,
      shedding: 5,
      groomingNeeds: 5,
      trainability: 5,
      compatibilityWithKids: 4,
      compatibilityWithOtherPets: 2,
      apartmentSuitability: 2,
      canStayAlone: 1,
      familyFriendly: 3,
      warmWeatherSuitability: 3,
      coldWeatherSuitability: 4
    },
    physical_characteristics: {
      ears: "Ears pert ending in point, slant forward to frame face.",
      head: "Well-proportioned wedge-shaped head, strong muzzle.",
      fur: "Thick undercoat, coarse top coat, distinctive colorings of deep black and tan, silver, and white.",
      body: "Muscular, strong body, lanky with sense of balance and even proportion, firm ribs and chest, not stocky.",
      tail: "Thick, long hair on tail, slightly longer on underside."
    },
    history: [
      "German Shepherds were originally bred in Germany in the late 19th century.",
      "They were developed for intelligence and herding ability."
    ],
    care: {
      exercise: "Regular exercise maintains physical and mental health.",
      grooming: "Requires regular brushing.",
      training: "Early obedience training is essential."
    },
    diet: {
      recommended: [
        "High-quality protein (chicken, beef, fish)",
        "Vegetables and fruits (carrots, apples, blueberries)",
        "Whole grains (brown rice, oatmeal)"
      ],
      notRecommended: [
        "Chocolate",
        "Grapes and raisins",
        "Onions and garlic",
        "Processed foods"
      ]
    },
    health: {
      commonIssues: [
        "Hip Dysplasia",
        "Degenerative Myelopathy",
        "Bloat"
      ],
      symptomsToWatch: [
        "Swollen abdomen",
        "Retching",
        "Drooling",
        "Lethargy"
      ],
      preventiveTips: [
        "Feed smaller meals frequently.",
        "Avoid heavy exercise after meals."
      ]
    },
    owner_tips: [
      "Provide daily exercise.",
      "Offer mental stimulation.",
      "Be patient with training."
    ],
    images: {
      primary: 'https://via.placeholder.com/600x400',
      secondary: 'https://via.placeholder.com/600x400'
    }
  };

  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({ ...initialData });

  useEffect(() => {
    if (!isEditing) {
      setTempData({ ...initialData });
    }
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
    setTempData({ ...initialData });
  };

  const handleSave = () => {
    console.log('Saved data:', tempData); // Placeholder for future MongoDB integration
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData({ ...initialData });
    setIsEditing(false);
  };

  const handleInputChange = (field, value, section = null) => {
    if (section) {
      setTempData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setTempData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleArrayChange = (field, index, value) => {
    setTempData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const handleNestedArrayChange = (section, field, index, value) => {
    setTempData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].map((item, i) => i === index ? value : item)
      }
    }));
  };

  const addArrayItem = (field, defaultValue = '') => {
    setTempData(prev => ({
      ...prev,
      [field]: [...prev[field], defaultValue]
    }));
  };

  const addNestedArrayItem = (section, field, defaultValue = '') => {
    setTempData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: [...prev[section][field], defaultValue]
      }
    }));
  };

  const removeArrayItem = (field, index) => {
    setTempData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const removeNestedArrayItem = (section, field, index) => {
    setTempData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].filter((_, i) => i !== index)
      }
    }));
  };

  const handleImageUpload = (field) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const fakeUrl = URL.createObjectURL(file);
        setTempData(prev => ({
          ...prev,
          images: {
            ...prev.images,
            [field]: fakeUrl
          }
        }));
      }
    };
    fileInput.click();
  };

  return (
    <div className="space-y-6 p-6">
      {/* General Information Card */}
      <Card className="rounded-2xl bg-white bg-clip-border p-6 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h5 className="text-left text-2xl font-bold leading-9 text-navy-700 dark:text-white">
              General Information
            </h5>
            <p className="mt-1 text-sm font-medium text-gray-600">
              Update basic pet details
            </p>
          </div>
          <div className="flex gap-3">
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="linear flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300"
              >
                <MdEdit className="text-lg" />
                Edit
              </button>
            ) : (
              <>
                <button
                  onClick={handleCancel}
                  className="linear flex items-center px-4 py-2 text-sm text-red-400 dark:text-red-300 transition duration-200 hover:dark:text-red-500 hover:text-red-500 font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="linear flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-green-700 active:bg-green-700"
                >
                  Save Changes
                </button>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Breed and Species */}
          {['breed', 'species'].map((key) => (
            <div key={key} className="space-y-2">
              <label className="text-sm font-medium text-navy-700 dark:text-white">
                {key.charAt(0).toUpperCase() + key.slice(1)} *
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={tempData[key]}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-navy-700 outline-none focus:border-brand-500 dark:border-navy-600 dark:bg-navy-800 dark:text-white dark:focus:border-brand-400"
                  required
                />
              ) : (
                <div className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-navy-700 dark:border-navy-600 dark:bg-navy-700 dark:text-white">
                  {tempData[key]}
                </div>
              )}
            </div>
          ))}
          {/* Images Section */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['primary', 'secondary'].map((imgType) => (
                <ImageUploadCard
                  key={imgType}
                  src={tempData.images[imgType]}
                  onChange={() => handleImageUpload(imgType)}
                  label={`${imgType.charAt(0).toUpperCase() + imgType.slice(1)} Image`}
                  isEditing={isEditing}
                />
              ))}
            </div>
          </div>
          {/* General Information */}
          {Object.keys(tempData.general_info).map((key) => (
            <div key={key} className="space-y-2">
              <label className="text-sm font-medium text-navy-700 dark:text-white">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={tempData.general_info[key]}
                  onChange={(e) => handleInputChange(key, e.target.value, 'general_info')}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-navy-700 outline-none focus:border-brand-500 dark:border-navy-600 dark:bg-navy-800 dark:text-white dark:focus:border-brand-400"
                />
              ) : (
                <div className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-navy-700 dark:border-navy-600 dark:bg-navy-700 dark:text-white">
                  {tempData.general_info[key]}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Ratings Card */}
      <Card className="rounded-2xl bg-white bg-clip-border p-6 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none">
        <div className="mb-6">
          <h5 className="text-left text-2xl font-bold leading-9 text-navy-700 dark:text-white">
            Ratings
          </h5>
          <p className="mt-1 text-sm font-medium text-gray-600">
            Rate characteristics (1-5 paws)
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.keys(tempData.ratings).map((key) => (
            <RatingEditor
              key={key}
              value={tempData.ratings[key]}
              onChange={(value) => handleInputChange(key, value, 'ratings')}
              label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              isEditing={isEditing}
            />
          ))}
        </div>
      </Card>

      {/* Physical Characteristics Card */}
      <Card className="rounded-2xl bg-white bg-clip-border p-6 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none">
        <div className="mb-6">
          <h5 className="text-left text-2xl font-bold leading-9 text-navy-700 dark:text-white">
            Physical Characteristics
          </h5>
          <p className="mt-1 text-sm font-medium text-gray-600">
            Describe physical traits
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {Object.keys(tempData.physical_characteristics).map((key) => (
            <div key={key} className="space-y-2">
              <label className="text-sm font-medium text-navy-700 dark:text-white">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </label>
              {isEditing ? (
                <textarea
                  value={tempData.physical_characteristics[key]}
                  onChange={(e) => handleInputChange(key, e.target.value, 'physical_characteristics')}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-navy-700 outline-none focus:border-brand-500 dark:border-navy-600 dark:bg-navy-800 dark:text-white dark:focus:border-brand-400"
                  rows="3"
                />
              ) : (
                <div className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-navy-700 dark:border-navy-600 dark:bg-navy-700 dark:text-white min-h-[80px]">
                  {tempData.physical_characteristics[key]}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* History Card */}
      <Card className="rounded-2xl bg-white bg-clip-border p-6 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none">
        <div className="mb-6">
          <h5 className="text-left text-2xl font-bold leading-9 text-navy-700 dark:text-white">
            History
          </h5>
          <p className="mt-1 text-sm font-medium text-gray-600">
            Add or edit historical facts
          </p>
        </div>
        <EditableList
          items={tempData.history}
          onChange={(index, value) => handleArrayChange('history', index, value)}
          onAdd={() => addArrayItem('history', '')}
          onRemove={(index) => removeArrayItem('history', index)}
          isEditing={isEditing}
          label="History Fact"
        />
      </Card>

      {/* Care Card */}
      <Card className="rounded-2xl bg-white bg-clip-border p-6 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none">
        <div className="mb-6">
          <h5 className="text-left text-2xl font-bold leading-9 text-navy-700 dark:text-white">
            Care Information
          </h5>
          <p className="mt-1 text-sm font-medium text-gray-600">
            Provide care guidelines
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {Object.keys(tempData.care).map((key) => (
            <div key={key} className="space-y-2">
              <label className="text-sm font-medium text-navy-700 dark:text-white">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </label>
              {isEditing ? (
                <textarea
                  value={tempData.care[key]}
                  onChange={(e) => handleInputChange(key, e.target.value, 'care')}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-navy-700 outline-none focus:border-brand-500 dark:border-navy-600 dark:bg-navy-800 dark:text-white dark:focus:border-brand-400"
                  rows="3"
                />
              ) : (
                <div className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-navy-700 dark:border-navy-600 dark:bg-navy-700 dark:text-white min-h-[80px]">
                  {tempData.care[key]}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Diet Card */}
      <Card className="rounded-2xl bg-white bg-clip-border p-6 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none">
        <div className="mb-6">
          <h5 className="text-left text-2xl font-bold leading-9 text-navy-700 dark:text-white">
            Diet Recommendations
          </h5>
          <p className="mt-1 text-sm font-medium text-gray-600">
            Manage recommended and non-recommended foods
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {['recommended', 'notRecommended'].map((key) => (
            <EditableList
              key={key}
              items={tempData.diet[key]}
              onChange={(index, value) => handleNestedArrayChange('diet', key, index, value)}
              onAdd={() => addNestedArrayItem('diet', key, '')}
              onRemove={(index) => removeNestedArrayItem('diet', key, index)}
              isEditing={isEditing}
              label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            />
          ))}
        </div>
      </Card>

      {/* Health Card */}
      <Card className="rounded-2xl bg-white bg-clip-border p-6 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none">
        <div className="mb-6">
          <h5 className="text-left text-2xl font-bold leading-9 text-navy-700 dark:text-white">
            Health Information
          </h5>
          <p className="mt-1 text-sm font-medium text-gray-600">
            Manage health-related information
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {['commonIssues', 'symptomsToWatch', 'preventiveTips'].map((key) => (
            <EditableList
              key={key}
              items={tempData.health[key]}
              onChange={(index, value) => handleNestedArrayChange('health', key, index, value)}
              onAdd={() => addNestedArrayItem('health', key, '')}
              onRemove={(index) => removeNestedArrayItem('health', key, index)}
              isEditing={isEditing}
              label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            />
          ))}
        </div>
      </Card>

      {/* Owner Tips Card */}
      <Card className="rounded-2xl bg-white bg-clip-border p-6 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none">
        <div className="mb-6">
          <h5 className="text-left text-2xl font-bold leading-9 text-navy-700 dark:text-white">
            Owner Tips
          </h5>
          <p className="mt-1 text-sm font-medium text-gray-600">
            Add or edit tips for pet owners
          </p>
        </div>
        <EditableList
          items={tempData.owner_tips}
          onChange={(index, value) => handleArrayChange('owner_tips', index, value)}
          onAdd={() => addArrayItem('owner_tips', '')}
          onRemove={(index) => removeArrayItem('owner_tips', index)}
          isEditing={isEditing}
          label="Owner Tip"
        />
      </Card>
    </div>
  );
};

export default BreedInfoEditor;
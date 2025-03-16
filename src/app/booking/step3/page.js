'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Fields from '@/components/atoms/Fields';
import TextArea from '@/components/atoms/TextArea';
import { validateForm } from '@/utils/validate';
import { registerUser, uploadFiles } from '@/services/user';
import FileUpload from '@/components/molecules/FileUpload';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import Button from '@/components/atoms/Button';
import { useSelector } from 'react-redux';
import { useSnackbar } from '@/context/SnackbarContext';

export default function Step3() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    emailRepeat: '',
    phoneNumber: '',
    idea: '',
    images: [],
    tattooType: '',
  });

  const [errors, setErrors] = useState({});
  const router = useRouter();
  const showSnackbar = useSnackbar();
  const selectedPart = useSelector((state) => state.selectedPart.value);

  useEffect(() => {
    if (selectedPart) {
      setFormData((prev) => ({ ...prev, tattooType: selectedPart }));
    } else {
      router.push('/booking/step2');
    }
  }, [selectedPart, router]);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (files) => {
    setFormData(prev => ({ ...prev, images: files }));
    console.log('Uploaded files:', files);
  };

  const handleBackClick = () => {
    router.push('/booking/step2');
  };

  const submit = async () => {
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    delete formData.emailRepeat;
    if (selectedPart === undefined || selectedPart === null) {
      router.push('/booking/step2');
    }
    try {
      const uploadResponse = await uploadFiles(formData.images);
      if (uploadResponse.length > 0) {
        const imageIds = uploadResponse.map(file => file.id);
        setFormData(prev => ({ ...prev, images: imageIds }));
        const formDataToSend = {
          ...formData,
          images: imageIds
        };
        await registerUser(formDataToSend);
        showSnackbar('User registered successfully!', 'success');
        // Redirect to next step or show a success message here
      }
    } catch (error) {
      showSnackbar(error, 'error');
      // Handle the error appropriately
    }
  };

  return (
    <div className="bg-[#E5DFDB] pt-[130px]">
      <div className="container mx-auto">
        <h2 className="!text-[#455927]">NICE! LAST STEP</h2>
        <p className="!text-[#606060] my-[40px] text-center">
          We really want to get to know you and your idea. To do this, just briefly describe your tattoo idea and let us know how we can best reach you.
        </p>

        <div className="flex justify-between w-full">
          <div className="w-[49%]">
            <Fields
              name="firstName"
              label="First name *"
              value={formData.firstName}
              onChange={handleFieldChange}
              fullWidth
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
            />
          </div>
          <div className="w-[49%]">
            <Fields
              name="lastName"
              label="Last name *"
              value={formData.lastName}
              onChange={handleFieldChange}
              fullWidth
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
            />
          </div>
        </div>

        <div className="flex justify-between w-full my-[36px]">
          <div className="w-[49%]">
            <Fields
              name="email"
              label="Email *"
              value={formData.email}
              onChange={handleFieldChange}
              fullWidth
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </div>
          <div className="w-[49%]">
            <Fields
              name="emailRepeat"
              label="Repeat Email *"
              value={formData.emailRepeat}
              onChange={handleFieldChange}
              fullWidth
              error={Boolean(errors.emailRepeat)}
              helperText={errors.emailRepeat}
            />
          </div>
        </div>

        <div className="flex justify-between w-full my-[36px]">
          <div className="w-[49%]">
            <Fields
              name="phoneNumber"
              label="Cell phone number"
              value={formData.phoneNumber}
              onChange={handleFieldChange}
              fullWidth
            />
          </div>
        </div>

        <div className="flex justify-between w-full my-[36px]">
          <div className="w-[100%]">
            <TextArea
              name="idea"
              label="Please describe your tattoo idea to us here."
              value={formData.idea}
              onChange={handleFieldChange}
              rows={5}
              fullWidth
            />
            <div className="flex w-full items-center">
              <InfoSharpIcon className="!w-[16px] text-[#A3A3A3] mr-1" />
              <div className="!text-[12px] text-[#A3A3A3]">
                You will hear from us within the next 12 hours, we promise.
              </div>
            </div>
          </div>
        </div>

        <div className='text-[#121212] text-[14px]'>Optional: Upload your pictures here</div>
        <div className="mb-[36px]">
          <FileUpload onChange onFileUpload={handleFileUpload} />
        </div>

        <div className="py-[64px] flex justify-end">
          <Button color="primary" className="!mr-5 w-[100px]" onClick={handleBackClick}>
            Back
          </Button>
          <Button color="success w-[100px]" onClick={submit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
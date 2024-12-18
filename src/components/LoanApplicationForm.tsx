import { Fragment, useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { showToast } from "@/lib/utils";

const LoanApplicationForm = ({
	setShowForm,
}: {
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState({
		// Personal Info
		businessName: "",
		ownerName: "",
		email: "",
		phone: "",

		// Business Details
		industry: "",
		businessAge: "",
		financialSystem: "",

		// Location
		lga: "",
		town: "",

		// Loan Details
		loanAmount: "",
		loanPurpose: "",
		challenges: [] as string[],
	});

	const steps = [
		{ title: "Personal Info", description: "Basic contact information" },
		{
			title: "Business Details",
			description: "Information about your business",
		},
		{ title: "Location", description: "Business location details" },
		{ title: "Loan Request", description: "Loan amount and purpose" },
		{ title: "Review", description: "Review your application" },
	];

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleChallengeToggle = (challenge: string) => {
		setFormData((prev) => ({
			...prev,
			challenges: prev.challenges.includes(challenge)
				? prev.challenges.filter((c) => c !== challenge)
				: [...prev.challenges, challenge],
		}));
	};

	const handleNext = () => {
		setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
	};

	const handleBack = () => {
		setCurrentStep((prev) => Math.max(prev - 1, 0));
	};

	const handleSubmit = () => {
		console.log("Form submitted:", formData);
		showToast.loading("Submitting Application");
		setTimeout(() => {
			setShowForm(false);
			if (Math.random() < 0.5) {
				showToast.success("Your request is under Review");
			} else {
				showToast.error("Application failed");
			}
		}, 2000);
		// Here you would typically send the data to your backend
	};

	const renderStepContent = () => {
		switch (currentStep) {
			case 0:
				return (
					<div className='space-y-4'>
						<div className='space-y-2'>
							<Label htmlFor='businessName'>Business Name</Label>
							<Input
								id='businessName'
								value={formData.businessName}
								onChange={(e) =>
									handleInputChange("businessName", e.target.value)
								}
								placeholder='Enter your business name'
							/>
						</div>
						<div className='space-y-2'>
							<Label htmlFor='ownerName'>Owner Name</Label>
							<Input
								id='ownerName'
								value={formData.ownerName}
								onChange={(e) =>
									handleInputChange("ownerName", e.target.value)
								}
								placeholder="Enter owner's name"
							/>
						</div>
						<div className='space-y-2'>
							<Label htmlFor='email'>Email</Label>
							<Input
								id='email'
								type='email'
								value={formData.email}
								onChange={(e) =>
									handleInputChange("email", e.target.value)
								}
								placeholder='Enter your email'
							/>
						</div>
						<div className='space-y-2'>
							<Label htmlFor='phone'>Phone Number</Label>
							<Input
								id='phone'
								type='tel'
								value={formData.phone}
								onChange={(e) =>
									handleInputChange("phone", e.target.value)
								}
								placeholder='Enter your phone number'
							/>
						</div>
					</div>
				);

			case 1:
				return (
					<div className='space-y-4'>
						<div className='space-y-2'>
							<Label htmlFor='industry'>Industry Type</Label>
							<Select
								value={formData.industry}
								onValueChange={(value) =>
									handleInputChange("industry", value)
								}>
								<SelectTrigger>
									<SelectValue placeholder='Select industry type' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='agriculture'>
										Agriculture
									</SelectItem>
									<SelectItem value='retail'>Retail</SelectItem>
									<SelectItem value='services'>Services</SelectItem>
									<SelectItem value='manufacturing'>
										Manufacturing
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className='space-y-2'>
							<Label htmlFor='businessAge'>Business Age</Label>
							<Select
								value={formData.businessAge}
								onValueChange={(value) =>
									handleInputChange("businessAge", value)
								}>
								<SelectTrigger>
									<SelectValue placeholder='Select business age' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='0-1'>0-1 Year</SelectItem>
									<SelectItem value='1-3'>1-3 Years</SelectItem>
									<SelectItem value='3+'>3+ Years</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className='space-y-2'>
							<Label>Financial Management System</Label>
							<RadioGroup
								value={formData.financialSystem}
								onValueChange={(value) =>
									handleInputChange("financialSystem", value)
								}>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem
										value='formal'
										id='formal'
									/>
									<Label htmlFor='formal'>Formal accounting</Label>
								</div>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem
										value='basic'
										id='basic'
									/>
									<Label htmlFor='basic'>Basic bookkeeping</Label>
								</div>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem
										value='none'
										id='none'
									/>
									<Label htmlFor='none'>No system</Label>
								</div>
							</RadioGroup>
						</div>
					</div>
				);

			case 2:
				return (
					<div className='space-y-4'>
						<div className='space-y-2'>
							<Label htmlFor='lga'>LGA (Local Government Area)</Label>
							<Input
								id='lga'
								value={formData.lga}
								onChange={(e) =>
									handleInputChange("lga", e.target.value)
								}
								placeholder='Enter LGA'
							/>
						</div>
						<div className='space-y-2'>
							<Label htmlFor='town'>Town</Label>
							<Input
								id='town'
								value={formData.town}
								onChange={(e) =>
									handleInputChange("town", e.target.value)
								}
								placeholder='Enter town'
							/>
						</div>
					</div>
				);

			case 3:
				return (
					<div className='space-y-4'>
						<div className='space-y-2'>
							<Label htmlFor='loanAmount'>Loan Amount (₦)</Label>
							<Input
								id='loanAmount'
								type='number'
								value={formData.loanAmount}
								onChange={(e) =>
									handleInputChange("loanAmount", e.target.value)
								}
								placeholder='Enter loan amount'
							/>
						</div>
						<div className='space-y-2'>
							<Label htmlFor='loanPurpose'>Purpose of Loan</Label>
							<Select
								value={formData.loanPurpose}
								onValueChange={(value) =>
									handleInputChange("loanPurpose", value)
								}>
								<SelectTrigger>
									<SelectValue placeholder='Select loan purpose' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='equipment'>Equipment</SelectItem>
									<SelectItem value='expansion'>Expansion</SelectItem>
									<SelectItem value='working-capital'>
										Working Capital
									</SelectItem>
									<SelectItem value='other'>Other</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className='space-y-2'>
							<Label>Challenges Faced</Label>
							<div className='space-y-2'>
								{[
									"High Costs",
									"No Customers",
									"No Access to Finance",
								].map((challenge) => (
									<div
										key={challenge}
										className='flex items-center space-x-2'>
										<Checkbox
											id={challenge}
											checked={formData.challenges.includes(
												challenge
											)}
											onCheckedChange={() =>
												handleChallengeToggle(challenge)
											}
										/>
										<Label htmlFor={challenge}>{challenge}</Label>
									</div>
								))}
							</div>
						</div>
					</div>
				);

			case 4:
				return (
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Application Summary</h3>
						<div className='space-y-2'>
							<p>
								<strong>Business Name:</strong> {formData.businessName}
							</p>
							<p>
								<strong>Owner Name:</strong> {formData.ownerName}
							</p>
							<p>
								<strong>Industry:</strong> {formData.industry}
							</p>
							<p>
								<strong>Business Age:</strong> {formData.businessAge}
							</p>
							<p>
								<strong>Location:</strong> {formData.town},{" "}
								{formData.lga}
							</p>
							<p>
								<strong>Loan Amount:</strong> ₦{formData.loanAmount}
							</p>
							<p>
								<strong>Loan Purpose:</strong> {formData.loanPurpose}
							</p>
						</div>
					</div>
				);

			default:
				return null;
		}
	};

	return (
		<Fragment>
			<div
				className='fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30'
				onClick={() => setShowForm(false)}
			/>
			<div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-4xl mx-auto p-4 space-y-8'>
				<Card>
					<CardHeader></CardHeader>
					<CardContent>
						{/* Stepper */}
						<div className='mb-8'>
							<div className='flex justify-between'>
								{steps.map((step, index) => (
									<div
										key={step.title}
										className='flex flex-col items-center w-1/5'>
										<div
											className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                    ${
								index <= currentStep
									? "bg-blue-500 border-blue-500 text-white"
									: "border-gray-300 text-gray-300"
							}`}>
											{index < currentStep ? (
												<Check className='w-4 h-4' />
											) : (
												index + 1
											)}
										</div>
										<div className='text-xs mt-2 text-center text-gray-600'>
											{step.title}
										</div>
									</div>
								))}
							</div>
							<div className='relative mt-2'>
								<div className='absolute top-0 left-0 right-0 h-0.5 bg-gray-200' />
								<div
									className='absolute top-0 left-0 h-0.5 bg-blue-500 transition-all duration-300'
									style={{
										width: `${
											(currentStep / (steps.length - 1)) * 100
										}%`,
									}}
								/>
							</div>
						</div>

						{/* Step Content */}
						<div className='mt-8'>{renderStepContent()}</div>

						{/* Navigation Buttons */}
						<div className='mt-8 flex justify-between'>
							{currentStep !== 0 && (
								<Button
									variant='outline'
									onClick={handleBack}
									disabled={currentStep === 0}>
									Back
								</Button>
							)}
							{currentStep === steps.length - 1 ? (
								<Button
									className='bg-blue-600'
									onClick={handleSubmit}>
									Submit Application
								</Button>
							) : (
								<Button
									className='ml-auto bg-blue-600'
									onClick={handleNext}>
									Next <ChevronRight className='ml-2 h-4 w-4' />
								</Button>
							)}
						</div>
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default LoanApplicationForm;

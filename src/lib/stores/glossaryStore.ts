import { readable } from "svelte/store";

const glossaryData = [
	{
		term: "Additionality",
		definition:
			"The notion that a carbon offset project would not have happened without the offset revenue.",
	},
	{
		term: "Afforestation ",
		definition:
			"The practice of planting new forests where there were no forests previously.",
	},
	{
		term: "Anthropogenic",
		definition: "Caused or influenced by human activities.",
	},
	{
		term: "Avoided Deforestation",
		definition:
			"A carbon offset project that prevents the destruction of forests.",
	},
	{
		term: "Baseline",
		definition:
			"An estimate of the amount of greenhouse gas emissions that would have occurred without a carbon offset project.",
	},
	{
		term: "Biodiversity",
		definition:
			"The variety of life in the world or in a particular habitat or ecosystem.",
	},
	{
		term: "Biomass",
		definition:
			"Organic material, such as wood or agricultural waste, that can be used as a source of energy.",
	},
	{
		term: "Blue Carbon",
		definition:
			"Carbon that is stored in coastal ecosystems such as mangroves, tidal marshes, and seagrass meadows.",
	},
	{
		term: "California Cap and Trade Scheme",
		definition:
			"A regulatory system that requires companies in California to purchase carbon credits to offset their emissions.",
	},
	{
		term: "Cap-and-Trade",
		definition:
			"A regulatory system that sets a limit on the amount of greenhouse gas emissions that can be emitted by certain companies or industries, and allows them to buy and sell carbon credits.",
	},
	{
		term: "Carbon Allowance",
		definition:
			"A permit that allows a company to emit a certain amount of greenhouse gases.",
	},
	{
		term: "Carbon Broker",
		definition: "A company that buys and sells carbon credits.",
	},
	{
		term: "Carbon Budget",
		definition:
			"The total amount of greenhouse gas emissions that can be emitted while still keeping global warming below a certain level.",
	},
	{
		term: "Carbon Calculator",
		definition:
			"A tool that estimates the amount of greenhouse gas emissions that are caused by an organization, event, product, or person.",
	},
	{
		term: "Carbon Capture and Sequestration (CCS)",
		definition:
			"A process that captures carbon dioxide emissions from power plants and other industrial sources and stores them in underground geological formations.",
	},
	{
		term: "Carbon Capture and Sequestration (CCS)",
		definition:
			"A process that captures carbon dioxide emissions from power plants and other industrial sources and stores them in underground geological formations.",
	},
	{
		term: "Carbon Capture, Utilization, and Storage (CCUS)",
		definition:
			"A process that captures carbon dioxide emissions from power plants and other industrial sources and stores them underground or in other long-term storage.",
	},
	{
		term: "Carbon Credit",
		definition:
			"A certificate that represents one metric tonne of carbon dioxide equivalent that has been reduced, removed, or avoided through a carbon offset project. Carbon credits can be bought and sold in the carbon market.",
	},
	{
		term: "Carbon Cycle",
		definition:
			"The process by which carbon is exchanged between the atmosphere, oceans, soil, rocks, and living organisms.",
	},
	{
		term: "Carbon Dioxide (CO2)",
		definition:
			"A colorless, odorless gas that is naturally present in the atmosphere. It is also a byproduct of burning fossil fuels and other human activities.",
	},
	{
		term: "Carbon Dioxide Equivalent (CO2e)",
		definition:
			"A unit for measuring the global warming potential of greenhouse gases, calculated by converting the amount of greenhouse gas emissions into the equivalent amount of carbon dioxide emissions.",
	},
	{
		term: "Carbon Footprint",
		definition:
			"The total amount of greenhouse gas emissions that are caused by an organization, event, product, or person.",
	},
	{
		term: "Carbon Market",
		definition:
			"A market that allows the buying and selling of carbon credits and offsets.",
	},
	{
		term: "Carbon Neutral",
		definition:
			"Achieving net zero carbon dioxide emissions by balancing carbon emissions with carbon removal or offsetting.",
	},
	{
		term: "Carbon Offset",
		definition:
			"A unit of carbon dioxide equivalent that has been reduced, removed, or avoided through a carbon offset project.",
	},
	{
		term: "Carbon Offset Project",
		definition:
			"A project that is designed to reduce, remove, or avoid greenhouse gas emissions.",
	},
	{
		term: "Carbon Removal",
		definition:
			"The process of removing carbon dioxide from the atmosphere and storing it in long-term storage.",
	},
	{
		term: "Carbon Sequestration",
		definition:
			"The process of capturing and storing carbon dioxide emissions from the atmosphere in natural or artificial sinks such as forests, soil, or underground storage.",
	},
	{
		term: "Carbon Sink",
		definition:
			"A natural or artificial reservoir that absorbs and stores carbon dioxide emissions from the atmosphere.",
	},
	{
		term: "Carbon Sink",
		definition:
			"A natural or artificial reservoir that absorbs and stores carbon dioxide emissions from the atmosphere.",
	},
	{
		term: "Carbon Source",
		definition:
			"Any process, activity, or object that releases carbon dioxide into the atmosphere.",
	},
	{
		term: "CCA Futures",
		definition:
			"Futures contracts that allow investors to buy and sell California Carbon Allowances (CCAs).",
	},
	{
		term: "CCO Futures",
		definition:
			"Futures contracts that allow investors to buy and sell California Compliance Offset (CCO) credits.",
	},
	{
		term: "CCS (Carbon Capture and Storage)",
		definition:
			"A technology that captures carbon dioxide emissions from industrial processes or power plants and stores them underground or in other long-term storage.",
	},
	{
		term: "CCU (Carbon Dioxide Capture and Utilization)",
		definition:
			"A technology that captures carbon dioxide emissions and reuses the carbon dioxide for another purpose, such as in the production of biofuels or chemicals.",
	},
	{
		term: "Climate Change",
		definition:
			"The long-term alteration of global weather patterns and temperatures, primarily driven by human activities such as the burning of fossil fuels and deforestation.",
	},
	{
		term: "Climate Finance",
		definition:
			"Funding that is used to support climate change mitigation and adaptation projects.",
	},
	{
		term: "Climate Mitigation",
		definition:
			"Actions that are taken to reduce or prevent the emission of greenhouse gases.",
	},
	{
		term: "Climate Neutral",
		definition:
			"Achieving net zero greenhouse gas emissions by balancing greenhouse gas emissions with greenhouse gas removal or offsetting.",
	},
	{
		term: "Climate Resilience",
		definition:
			"The ability of a system to adapt to climate change and withstand the impacts of climate change.",
	},
	{
		term: "Climate Risk",
		definition:
			"The potential for climate change to have a negative impact on an organization, event, product, or person.",
	},
	{
		term: "Climate Vulnerability",
		definition:
			"The degree to which a system is susceptible to the negative impacts of climate change.",
	},
	{
		term: "CO2 (Carbon Dioxide)",
		definition:
			"A colorless, odorless gas that is naturally present in the atmosphere. It is also a byproduct of burning fossil fuels and other human activities.",
	},
	{
		term: "Compliance Carbon Market",
		definition:
			"A market for carbon credits in which companies must purchase credits to comply with emissions reduction regulations.",
	},
	{
		term: "COP",
		definition:
			"The Conference of Parties, an annual United Nations conference that brings together representatives from countries around the world to discuss and address global",
	},
	{
		term: "DAC (Direct Air Capture)",
		definition:
			"A process that captures carbon dioxide directly from the air and stores it for long-term storage.",
	},
	{
		term: "Emission Reduction Ton (ERT)",
		definition:
			"A unit of measure for carbon credits representing one metric ton of CO2 equivalent emissions that have been avoided or reduced.",
	},
	{
		term: "Emission Reduction Unit (ERU)",
		definition:
			"A unit of measure for carbon credits representing one metric ton of CO2 equivalent emissions that have been avoided or reduced.",
	},
	{
		term: "Emissions Trading",
		definition:
			"A market-based approach to reducing greenhouse gas emissions in which companies can buy and sell carbon credits.",
	},
	{
		term: "Emissions Trading Scheme (ETS)",
		definition:
			"A market-based approach to reducing greenhouse gas emissions in which companies can buy and sell carbon credits.",
	},
	{
		term: "EU Emission Trading Scheme (EU ETS)",
		definition:
			"A cap-and-trade program that covers more than 10,000 power plants and manufacturing facilities in 31 European countries.",
	},
	{
		term: "Extreme Weather Events",
		definition:
			"Severe weather conditions that can have a significant impact on society, such as hurricanes, floods, droughts, and heat waves.",
	},
	{
		term: "Fossil Fuels",
		definition:
			"Non-renewable energy sources that are formed from the remains of dead plants and animals, such as coal, oil, and natural gas.",
	},
	// global warming
	{
		term: "Global Warming",
		definition:
			"The long-term increase in global temperatures, primarily driven by human activities such as the burning of fossil fuels and deforestation.",
	},
	// Global Warming Potential (GWP)
	{
		term: "Global Warming Potential (GWP)",
		definition:
			"A measure of how much heat a greenhouse gas traps in the atmosphere over a specific period of time, compared to carbon dioxide.",
	},
	// Greenhouse Gas (GHG)
	{
		term: "Greenhouse Gas (GHG)",
		definition:
			"A gas that absorbs and emits heat in the atmosphere, such as carbon dioxide, methane, and nitrous oxide.",
	},
	// Greenhouse Gas Protocol
	{
		term: "Greenhouse Gas Protocol",
		definition:
			"A set of standards for measuring and reporting greenhouse gas emissions.",
	},
	// Greenhouse Gas Protocol Scope 1
	{
		term: "Greenhouse Gas Protocol Scope 1",
		definition:
			"A category of greenhouse gas emissions that includes direct emissions from sources that are owned or controlled by an organization, such as emissions from company-owned vehicles and equipment.",
	},
	// Greenhouse Gas Protocol Scope 2
	{
		term: "Greenhouse Gas Protocol Scope 2",
		definition:
			"A category of greenhouse gas emissions that includes indirect emissions from the generation of purchased electricity, heat, or steam consumed by an organization.",
	},
	// Greenhouse Gas Protocol Scope 3
	{
		term: "Greenhouse Gas Protocol Scope 3",
		definition:
			"A category of greenhouse gas emissions that includes indirect emissions from sources that are not owned or controlled by an organization, such as emissions from the supply chain, employee commuting, and business travel.",
	},
	// Greenwashing
	{
		term: "Greenwashing",
		definition:
			"The practice of making misleading or unsubstantiated claims about the environmental benefits of a product, service, or company.",
	},
	// ICE CER Futures
	{
		term: "ICE CER Futures",
		definition:
			"Futures contracts that allow investors to buy and sell Certified Emission Reduction (CER) credits.",
	},
	// ICE EUA Futures
	{
		term: "ICE EUA Futures",
		definition:
			"Futures contracts that allow investors to buy and sell European Union Allowances (EUAs).",
	},
	// ICE Global Carbon Futures Index
	{
		term: "ICE Global Carbon Futures Index",
		definition:
			"An index that tracks the performance of the most liquid carbon futures contracts.",
	},
	// ICE RGGI Futures
	{
		term: "ICE RGGI Futures",
		definition:
			"Futures contracts that allow investors to buy and sell Regional Greenhouse Gas Initiative (RGGI) allowances.",
	},
	// Kyoto Protocol
	{
		term: "Kyoto Protocol",
		definition:
			"An international treaty that was adopted in 1997 and went into effect in 2005. The treaty commits countries to reducing greenhouse gas emissions.",
	},
	// Land Use Change LUC
	{
		term: "Land Use Change LUC",
		definition:
			"The conversion of land from one use to another, such as converting a forest into a farm.",
	},
	{
		term: "Leakage",
		definition:
			"The increase in greenhouse gas emissions that occurs when a company moves its operations to a country with less stringent emissions regulations.",
	},
	{
		term: "Mandatory (Compliance) Market",
		definition:
			"A market for carbon credits in which companies must purchase credits to comply with emissions reduction regulations.",
	},
	// Megawatt (MW)
	{
		term: "Megawatt (MW)",
		definition: "A unit of power equal to one million watts.",
	},
	// Megawatt Hour (MWh)
	{
		term: "Megawatt Hour (MWh)",
		definition: "A unit of energy equal to one million watt hours.",
	},
	// Methane (CH4)
	{
		term: "Methane (CH4)",
		definition:
			"A greenhouse gas that is naturally present in the atmosphere. It is also a byproduct of human activities such as agriculture and the extraction of fossil fuels.",
	},
	// Net Zero
	{
		term: "Net Zero",
		definition:
			"Achieving a balance between the amount of greenhouse gas emissions produced and the amount removed from the atmosphere.",
	},
	{
		term: "Offset Certificates",
		definition:
			"A certificate that represents one metric ton of CO2 equivalent emissions that have been avoided or reduced.",
	},
	// Paris Agreement
	{
		term: "Paris Agreement",
		definition:
			"An international treaty that was adopted in 2015. The treaty commits countries to reducing greenhouse gas emissions.",
	},
	// Pathway
	{
		term: "Pathway",
		definition:
			"A set of rules that governs how a carbon offset project is developed and implemented.",
	},
	// Performance Standard
	{
		term: "Performance Standard",
		definition:
			"A set of rules that governs how a carbon offset project is developed and implemented.",
	},
	// Permanent Offsets
	{
		term: "Permanent Offsets",
		definition:
			"Carbon credits that are generated by projects that permanently reduce or remove greenhouse gas emissions.",
	},
	// Project Developer
	{
		term: "Project Developer",
		definition: "An organization that develops carbon offset projects.",
	},
	// Project Developer Fee
	{
		term: "Project Developer Fee",
		definition:
			"A fee that is paid to a project developer for developing a carbon offset project.",
	},
	// Project Developer Risk
	{
		term: "Project Developer Risk",
		definition:
			"The risk that a project developer will not be able to deliver the carbon credits that it has promised.",
	},
	// Project Developer Share
	{
		term: "Project Developer Share",
		definition:
			"The share of carbon credits that a project developer receives from a carbon offset project.",
	},
	// Real Offsets
	{
		term: "Real Offsets",
		definition:
			"Carbon credits that are generated by projects that permanently reduce or remove greenhouse gas emissions.",
	},
	{
		term: "Reduced Emissions from Deforestation and Forest Degradation (REDD+)",
		definition:
			"A program that provides financial incentives to countries or communities to reduce emissions from deforestation and forest degradation, and to promote the conservation, sustainable management, and restoration of forests.",
	},
	{
		term: "Regional Greenhouse Gas Initiative (RGGI)",
		definition:
			"A cap-and-trade program that covers power plants in the northeastern United States",
	},
	{
		term: "Regulated carbon market",
		definition:
			"A carbon market that is established and regulated by government authorities, with legally binding emission reduction targets.",
	},
	{
		term: "Removal Unit (RMU)",
		definition:
			"A carbon credit that represents one metric tonne of carbon dioxide equivalent that has been removed from the atmosphere and stored in long-term storage.",
	},
	{
		term: "Renewable Energy",
		definition:
			"Energy that is generated from natural resources, such as wind, solar, and hydro power, that are replenished naturally and sustainably.",
	},
	{
		term: "Renewable Energy Credits (RECs)",
		definition:
			"Certificates that represent proof that one megawatt-hour (MWh) of electricity was generated from a renewable energy source, such as wind or solar. RECs can be bought and sold separately from the electricity itself.",
	},
	{
		term: "Retire",
		definition:
			"In the carbon market, to retire an offset means to remove it from circulation, indicating that it has been used to offset a specific amount of carbon emissions.",
	},
	{
		term: "Scope 1 Emissions (S1)",
		definition:
			"Direct emissions from sources that are owned or controlled by the reporting entity, such as emissions from combustion in owned or controlled boilers, furnaces, vehicles, or chemical production.",
	},
	{
		term: "Scope 2 Emissions (S2)",
		definition:
			"Indirect emissions resulting from the generation of purchased electricity, steam, heating, and cooling consumed by the reporting entity.",
	},
	{
		term: "Scope 3 Emissions (S3)",
		definition:
			"Indirect emissions that occur in the value chain of the reporting entity, including both upstream and downstream emissions.",
	},
	{
		term: "Sequestration",
		definition:
			"The process of capturing and storing carbon dioxide emissions from the atmosphere in natural or artificial sinks such as forests, soil, or underground storage.",
	},
	{
		term: "Social cost of carbon",
		definition:
			"A measure of the economic damages associated with a ton of carbon dioxide emissions, taking into account the impact on public health, agriculture, and other factors.",
	},
	// Sustainable Development Goals (SDG)
	{
		term: "Sustainable Development Goals (SDG)",
		definition:
			"A set of 17 goals adopted by the United Nations in 2015 to end poverty, protect the planet, and ensure prosperity for all. Many of the goals are relevant to the fight against climate change.",
	},
	// UN Framework Convention on Climate Change (UNFCCC)
	{
		term: "UN Framework Convention on Climate Change (UNFCCC)",
		definition:
			'An international treaty signed at the Rio Earth Summit in 1992 that aims to prevent "dangerous" human interference with the climate system.',
	},
	// Verifiable Offsets
	{
		term: "Verifiable Offsets",
		definition:
			"Carbon credits that are independently verified and certified to meet certain standards, such as the Gold Standard or the Verified Carbon Standard.",
	},
	{
		term: "Verification",
		definition:
			"The process of ensuring that carbon offsets meet the requirements of a particular standard, such as the Gold Standard or the Verified Carbon Standard.",
	},
	// Verified Carbon Unit (VCU)
	{
		term: "Verified Carbon Unit (VCU)",
		definition:
			"A carbon credit that has been issued under the Verified Carbon Standard.",
	},
	// Verified Emission Reduction (VER)
	{
		term: "Verified Emission Reduction (VER)",
		definition:
			"A carbon credit that has been issued under the Verified Carbon Standard.",
	},
	// Verra
	{
		term: "Verra",
		definition:
			"A nonprofit organization that develops and manages standards for carbon offsets and sustainable development.",
	},
	{
		term: "Vintage",
		definition: "The year in which a carbon credit was issued.",
	},
	// Voluntary Carbon Market (VCM)
	{
		term: "Voluntary Carbon Market (VCM)",
		definition:
			"A market in which companies and individuals voluntarily purchase carbon offsets or credits to mitigate their carbon emissions, rather than being required to do so by regulations or compliance schemes.",
	},
	// Voluntary Emission Reduction (VER)
	{
		term: "Voluntary Emission Reduction (VER)",
		definition:
			"A carbon credit that has been issued under the Verified Carbon Standard.",
	},
	// Voluntary Offset
	{
		term: "Voluntary Offset",
		definition:
			"A carbon offset that is purchased voluntarily by a company or individual to mitigate their carbon emissions, rather than being required to do so by regulations or compliance schemes.",
	},
	// Voluntary Offset Standard (VOS)
	{
		term: "Voluntary Offset Standard (VOS)",
		definition:
			"A standard that sets requirements for carbon offsets that are sold in the voluntary carbon market.",
	},
	// Voluntary Offset Unit (VOU)
	{
		term: "Voluntary Offset Unit (VOU)",
		definition:
			"A carbon credit that has been issued under the Verified Carbon Standard.",
	},
	// Voluntary Reduction
	{
		term: "Voluntary Reduction",
		definition:
			"A reduction in carbon emissions that is made voluntarily by a company or individual, rather than being required to do so by regulations or compliance schemes.",
	},
	// Voluntary Renewable Energy Certificate (VREC)
	{
		term: "Voluntary Renewable Energy Certificate (VREC)",
		definition:
			"A certificate that represents proof that one megawatt-hour (MWh) of electricity was generated from a renewable energy source, such as wind or solar. VRECs can be bought and sold separately from the electricity itself.",
	},
	// Voluntary Renewable Energy Credit (VREC)
	{
		term: "Voluntary Renewable Energy Credit (VREC)",
		definition:
			"A certificate that represents proof that one megawatt-hour (MWh) of electricity was generated from a renewable energy source, such as wind or solar. VRECs can be bought and sold separately from the electricity itself.",
	},
	// Voluntary Renewable Energy Market (VREM)
	{
		term: "Voluntary Renewable Energy Market (VREM)",
		definition:
			"A market in which companies and individuals voluntarily purchase renewable energy certificates (RECs) to mitigate their carbon emissions, rather than being required to do so by regulations or compliance schemes.",
	},
	// Voluntary Renewable Energy Standard (VRES)
	{
		term: "Voluntary Renewable Energy Standard (VRES)",
		definition:
			"A standard that sets requirements for renewable energy certificates (RECs) that are sold in the voluntary renewable energy market.",
	},
	// Voluntary Renewable Energy Unit (VREU)
	{
		term: "Voluntary Renewable Energy Unit (VREU)",
		definition:
			"A certificate that represents proof that one megawatt-hour (MWh) of electricity was generated from a renewable energy source, such as wind or solar. VRECs can be bought and sold separately from the electricity itself.",
	},
	// WRI
	{
		term: "WRI",
		definition:
			"World Resources Institute, a nonprofit organization that works to address six urgent challenges: food, forests, water, climate, energy, and cities.",
	},
	// WRI/WBCSD GHG Protocol
	{
		term: "WRI/WBCSD GHG Protocol",
		definition:
			"A widely used standard for measuring and reporting greenhouse gas emissions.",
	},
];

export const glossary = readable(glossaryData);
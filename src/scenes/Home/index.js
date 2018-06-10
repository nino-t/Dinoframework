import React from 'react'

import { DnFlex, DnFlexItem, DnSample, BnBox } from '../../components'

export default class Home extends React.Component {
	render() { 
		return (
			<div>
				<center>
					<h3>Flexbox Style</h3>
				</center>

				<DnFlex>
					{
						Array.apply(null, Array(1)).map((ar, index) => (
							<DnFlexItem key={index} md="100%">
								<BnBox>
									<DnSample>
										<p>1/1 Column</p>
									</DnSample>
								</BnBox>
							</DnFlexItem>
						))
					}				
				</DnFlex>				

				<DnFlex>
					{
						Array.apply(null, Array(2)).map((ar, index) => (
							<DnFlexItem key={index} md="50%">
								<BnBox>
									<DnSample>
										<p>1/2 Column</p>
									</DnSample>
								</BnBox>
							</DnFlexItem>
						))
					}				
				</DnFlex>

				<DnFlex>
					{
						Array.apply(null, Array(3)).map((ar, index) => (
							<DnFlexItem key={index} md="33.333%">
								<BnBox>
									<DnSample>
										<p>1/3 Column</p>
									</DnSample>
								</BnBox>
							</DnFlexItem>
						))
					}				
				</DnFlex>

				<DnFlex>
					{
						Array.apply(null, Array(4)).map((ar, index) => (
							<DnFlexItem key={index} md="25%" xs="50%">
								<BnBox>
									<DnSample>
										<p>1/4 Column</p>
									</DnSample>
								</BnBox>
							</DnFlexItem>
						))
					}				
				</DnFlex>				

				<DnFlex>
					{
						Array.apply(null, Array(5)).map((ar, index) => (
							<DnFlexItem key={index} md="20%" xs="100%">
								<BnBox>
									<DnSample>
										<p>1/5 Column</p>
									</DnSample>
								</BnBox>
							</DnFlexItem>
						))
					}				
				</DnFlex>								

				<DnFlex>
					<DnFlexItem md="10%">
						<BnBox>
							<DnSample>
								<p>10% Column</p>
							</DnSample>
						</BnBox>
					</DnFlexItem>

					<DnFlexItem md="90%">
						<BnBox>
							<DnSample>
								<p>90% Column</p>
							</DnSample>
						</BnBox>
					</DnFlexItem>					
				</DnFlex>												

				<DnFlex>
					<DnFlexItem md="20%">
						<BnBox>
							<DnSample>
								<p>20% Column</p>
							</DnSample>
						</BnBox>
					</DnFlexItem>

					<DnFlexItem md="80%">
						<BnBox>
							<DnSample>
								<p>80% Column</p>
							</DnSample>
						</BnBox>
					</DnFlexItem>					
				</DnFlex>								

				<DnFlex>
					<DnFlexItem md="30%" xs="40%">
						<BnBox>
							<DnSample>
								<p>30% Column</p>
							</DnSample>
						</BnBox>
					</DnFlexItem>

					<DnFlexItem md="70%" xs="60%">
						<BnBox>
							<DnSample>
								<p>70% Column</p>
							</DnSample>
						</BnBox>
					</DnFlexItem>					
				</DnFlex>												

				<DnFlex>
					<DnFlexItem md="40%">
						<BnBox>
							<DnSample>
								<p>40% Column</p>
							</DnSample>
						</BnBox>
					</DnFlexItem>

					<DnFlexItem md="60%">
						<BnBox>
							<DnSample>
								<p>60% Column</p>
							</DnSample>
						</BnBox>
					</DnFlexItem>					
				</DnFlex>												

				<DnFlex>
					<DnFlexItem md="50%">
						<BnBox>
							<DnSample>
								<p>50% Column</p>
							</DnSample>
						</BnBox>
					</DnFlexItem>

					<DnFlexItem md="50%">
						<BnBox>
							<DnSample>
								<p>50% Column</p>
							</DnSample>
						</BnBox>
					</DnFlexItem>					
				</DnFlex>																

				<DnFlex>
					{
						Array.apply(null, Array(5)).map((ar, index) => (
							<DnFlexItem key={index} md={1}>
								<BnBox>
									<DnSample>
										<p>Auto</p>
									</DnSample>
								</BnBox>
							</DnFlexItem>
						))
					}
				</DnFlex>				
			</div>
		)
	}
}

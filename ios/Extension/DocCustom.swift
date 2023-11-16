//
//  ContentViewController+DocumentscopyTheme.swift
//  OILiveness2D_Example
//
//  Created by Vitor Souza on 27/09/23.
//  Copyright © 2023 Oiti. All rights reserved.
//

import UIKit
import OILiveness2D

extension OitiReactNative {
    
    func createCustom(
        builder: DocumentscopyCustomizationBuilder,
        custom: Dictionary<String,Any>?
    ) -> DocumentscopyCustomizationBuilder {
        builder
            .setLoadingBackgroundColor(.init(hex: "#FFFFFF"))
            .setCaptureBackgroundColor(.init(hex: "#FFFFFF"))
        
        return builder
    }
    
}


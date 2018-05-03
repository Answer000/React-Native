//
//  ExampleInterface.m
//  LearnRN
//
//  Created by 澳蜗科技 on 2018/5/2.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "ExampleInterface.h"
#import <UIKit/UIKit.h>

@implementation ExampleInterface


-(instancetype)init {
  self = [super init];
  if (self) {
    
  }
  return self;
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(sendMessageFromRN:(NSString *)msg) {
  
  dispatch_async(dispatch_get_main_queue(), ^{
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:nil message:msg delegate:self cancelButtonTitle:@"取消" otherButtonTitles: nil];
    [alert show];
  });
  
}

@end

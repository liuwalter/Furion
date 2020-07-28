﻿using Fur.ApplicationBase.Attributes;
using System;

namespace Fur.DatabaseAccessor.Tangent.Attributes.Basics
{
    /// <summary>
    /// 切面基类特性
    /// </summary>
    [AttributeUsage(AttributeTargets.Method), NonWrapper]
    public class TangentAttribute : Attribute
    {
        /// <summary>
        /// 数据库上下文定位器
        /// </summary>
        public Type DbContextLocator { get; set; }

        /// <summary>
        /// 数据库执行返回值原类型
        /// </summary>
        public Type DbExecuteType { get; set; }
    }
}
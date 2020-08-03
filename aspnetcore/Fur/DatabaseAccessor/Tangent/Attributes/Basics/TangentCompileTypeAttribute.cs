﻿using Fur.AppCore.Attributes;
using System;

namespace Fur.DatabaseAccessor.Tangent.Attributes.Basics
{
    /// <summary>
    /// 切面编译类型
    /// <para>特指：函数和存储过程</para>
    /// </summary>
    [AttributeUsage(AttributeTargets.Method), NonWrapper]
    public class TangentCompileTypeAttribute : TangentAttribute
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="name">名称</param>
        public TangentCompileTypeAttribute(string name) => Name = name;

        /// <summary>
        /// 编译类型名称
        /// </summary>
        public string Name { get; set; }
    }
}